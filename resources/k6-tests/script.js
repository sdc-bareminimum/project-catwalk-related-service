// k6 run -u 200 -d 30s — summary-export=export.json — out json=my_test_result.json script.js
import { check } from "k6";
import http from 'k6/http';

export default function () {
  var url = "http://localhost:5100/";
  let res = http.get(url);
  check(res, {
    "is status 200": (r) => r.status === 200
  }, { my_tag: res.body });
}