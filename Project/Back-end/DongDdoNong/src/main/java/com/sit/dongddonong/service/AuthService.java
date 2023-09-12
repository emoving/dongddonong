package com.sit.dongddonong.service;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.sit.dongddonong.dto.MemberDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

@RequiredArgsConstructor
@Slf4j
@Service
public class AuthService {

    @Value("${kakao.client-id}")
    String clientId;

    @Value("${kakao.redirect-uri}")
    String redirectUri;
    public String login(String code) {

        String accessToken = "";
        String reqURL = "https://kauth.kakao.com/oauth/token";

        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            // POST 요청을 위해 기본값이 false인 setDoOutput을 true로 설정
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);

            // POST 요청에 필요로 요구하는 파라미터를 스트림을 통해 전송
            BufferedWriter bw = new BufferedWriter((new OutputStreamWriter(conn.getOutputStream())));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id=").append(clientId);
            sb.append("&redirect_uri=").append(redirectUri);
            sb.append("&code=").append(code);
            bw.write(sb.toString());
            bw.flush();

            // 결과 코드가 200이라면 성공
            int responseCode = conn.getResponseCode();
            log.info("responseCode : " + responseCode);

            // 요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
            String result = getRequestResult(conn);

            // Gson 라이브러리에 포함된 클래스로 JSON파싱 객체 생성
            JsonParser parser = new JsonParser();
            JsonElement element = JsonParser.parseString(result);

            accessToken = element.getAsJsonObject().get("access_token").getAsString();

            log.info("access_token : " + accessToken);

            bw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return accessToken;
    }

    public MemberDto getMember(String token) {

        String reqURL = "https://kapi.kakao.com/v2/user/me";
        MemberDto memberDto = new MemberDto();

        //access_token을 이용하여 사용자 정보 조회
        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("GET");
            conn.setDoOutput(true);
            conn.setRequestProperty("Authorization", "Bearer " + token); //전송할 header 작성, access_token전송

            //결과 코드가 200이라면 성공
            int responseCode = conn.getResponseCode();
            log.info("responseCode : " + responseCode);

            //요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
            String result = getRequestResult(conn);

            //Gson 라이브러리로 JSON파싱
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);
            JsonElement kakaoAccount = element.getAsJsonObject().get("kakao_account");
            JsonElement profile = kakaoAccount.getAsJsonObject().get("profile");

            //dto에 저장하기
            memberDto.setId(element.getAsJsonObject().get("id").getAsLong());
            memberDto.setNickName(profile.getAsJsonObject().get("nickname").getAsString());
            memberDto.setProfileImgUrl(profile.getAsJsonObject().get("profile_image_url").getAsString());
            memberDto.setType("user");

            log.info(memberDto.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }

        return memberDto;
    }

    // 이 메서드는 HTTP 응답 내용을 문자열로 변환하여 반환합니다.
    private String getRequestResult(HttpURLConnection conn) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = br.readLine()) != null) {
            sb.append(line);
        }
        br.close();
        return sb.toString();
    }
}