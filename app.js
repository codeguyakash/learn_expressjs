let count = 0;
setInterval(() => {
  try {
    fetch("https://www.instagram.com/api/graphql/", {
      headers: {
        accept: "*/*",
        "accept-language": "en,hi;q=0.9",
        "content-type": "application/x-www-form-urlencoded",
        dpr: "1.125",
        "sec-ch-prefers-color-scheme": "dark",
        "sec-ch-ua":
          '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
        "sec-ch-ua-full-version-list":
          '"Google Chrome";v="123.0.6312.122", "Not:A-Brand";v="8.0.0.0", "Chromium";v="123.0.6312.122"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": '""',
        "sec-ch-ua-platform": '"Windows"',
        "sec-ch-ua-platform-version": '"10.0.0"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "viewport-width": "1061",
        "x-asbd-id": "129477",
        "x-fb-friendly-name": "LSPlatformGraphQLLightspeedRequestForIGDQuery",
        "x-fb-lsd": "ByVh2bVOXnlaiTEtQ_O0xt",
        "x-ig-app-id": "936619743392459",
        "x-ig-d": "www",
      },
      referrer: "https://www.instagram.com/direct/t/103243294407381",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: "av=17841412384764840&__d=www&__user=0&__a=1&__req=2t&__hs=19829.HYP%3Ainstagram_web_pkg.2.1..0.1&dpr=1.5&__ccg=UNKNOWN&__rev=1012809397&__s=s0qakp%3Ab12paw%3Abq7iiv&__hsi=7358448284541367317&__dyn=7xeUjG1mxu1syaxG4Vp40NonwgU7SbzEdF8vyUco2qwJyEiw9-1DwUx60p-0LVE4W0om78c87m0yE462mcw5Mx62G3i1ywOwv89k2C1Fwc60AEC0H8-U2exi4UaEW2G1NwwwNwKxm5o2eUlwhEe88o5i7U1bobpEbUGdwtU662J08O321LwTwKG1pg2Xwr86C1mwrd6goK68jDyXxui2qi9xi6Uf9E&__csr=g8cdOtPMnhkybeDkpidf5myN2lq9TF9AOHnmziiV5HiGy4qtklkqSqGQIztdmLKVeWmGBFuO6qKVqpraQHAWijFpCajXfKBDyAAHBzSmmFEDGEHAih9OaiFeqrXAaJ5Ax5xedjDWBx6uhpEHBBDXAUqyEyl0053Og7kw0Oa16gmBIIw5i2q7k9zi09uubwgU6m2wxdJ2FE56dDBt1bUow7aAo5OiUiw36Zw4GwPyE2BppQaCwl8t-1_oaU2jwaCcDxUM3ow9I-u4p1zoKGgmUekgoaOwl4hPG4hbD2w3cxyag1fU5l3oG0_o5m1bo1KUG0GVVQaIw6m4F8-y0fe0KUWC4Sm3mZKU1lFFQaAo2fBocaCgR3Eqwn82R86EO2p0LgK2ijUgwq942N7wl-fwDw0nUFe7E2cw11a0SKaw4PwVw9GE9EN056U17E0wq0Xrx6&__comet_req=7&fb_dtsg=NAcPoEhkoLGn_tZyXk-vI2Bg1tbD3MnVoM5iQ7m2zyaq__ALUreYNwg%3A17843683195144578%3A1713067749&jazoest=26463&lsd=ByVh2bVOXnlaiTEtQ_O0xt&__spin_r=1012809397&__spin_b=trunk&__spin_t=1713272250&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=LSPlatformGraphQLLightspeedRequestForIGDQuery&variables=%7B%22deviceId%22%3A%2297c7996f-e6be-4fc7-879a-e0abd6a99b4a%22%2C%22requestId%22%3A40%2C%22requestPayload%22%3A%22%7B%5C%22database%5C%22%3A6%2C%5C%22epoch_id%5C%22%3A7185986203511065666%2C%5C%22failure_count%5C%22%3Anull%2C%5C%22last_applied_cursor%5C%22%3A%5C%22Fu7Z8-EMFu7Z8-EMAA%5C%22%2C%5C%22sync_params%5C%22%3Anull%2C%5C%22version%5C%22%3A26288060580792934%7D%22%2C%22requestType%22%3A2%7D&server_timestamps=true&doc_id=6195354443842040",
      method: "POST",
      mode: "cors",
      credentials: "include",
    });
  } catch (error) {
    console.log(error);
  }
  count++;
  console.log(count);
}, 3000);
