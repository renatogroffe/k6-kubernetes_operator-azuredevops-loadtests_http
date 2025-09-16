import http from 'k6/http';
import { sleep } from 'k6';
import {  textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {
  vus: 200,
  iterations: 10000,
};

export default function () {
  http.get('#{EndpointGetTest}#');
  sleep(1);
}

export function handleSummary(data) {
    return {
      stdout: textSummary(data, { indent: " ", enableColors: false })
    };
}