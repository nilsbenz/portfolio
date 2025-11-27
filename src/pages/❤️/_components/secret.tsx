import { useState } from "react";
import image from "./SNY02014.jpg";

function decodeBase64(base64String: string) {
  const binaryString = atob(base64String);

  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return new TextDecoder("utf-8").decode(bytes);
}

const password = decodeBase64("c2Nod2VpemVyaG9m");

export default function Secret() {
  const [input, setInput] = useState("");

  if (input.toLowerCase() !== password) {
    return (
      <div className="mx-auto flex w-full grow flex-col justify-center sm:max-w-xs">
        <label className="flex flex-col gap-1">
          Passwort
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-glass liquid-glass-border h-10 rounded-full px-6 backdrop-blur-sm focus:outline-none"
          />
        </label>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-xl space-y-8 text-lg">
      <h1 className="text-2xl font-semibold">
        {decodeBase64("TMO8YmkgTWFub24g4p2k77iP")}
      </h1>
      <div className="-mx-4 md:-mx-8">
        <img
          src={image.src}
          alt=""
          className="bg-glass w-full backdrop-blur-sm"
          style={{ aspectRatio: `${image.width} / ${image.height}` }}
        />
      </div>
      <p>
        {decodeBase64(
          "U2NodSB3aWRlciBuZWlndCBzaWNoIMO8c2VycyBXdWNoZWVuZCBkbyBpIGRhIExlbnplcmhlaWQgYW0gRW5kIHp1YS4gSSBob2ZmIG1lciBrb25uZCBldHogc2NodSB1ZiB6d28gdWggc2Now7ZuaSBUw6RnIHpydWdnIGJsaWNrYSB1bmQgw7xzIG5vIHVmIGRhIGxldHNjaCBUYWcgZnJldWEu",
        )}
      </p>
      <p>
        {decodeBase64(
          "SSBnbsO8c3MgamVkYSBNb21lbnQgd29uaSBtaXQgZGVyIGTDtnJmIHZlcmJyaW5nYSwgZ2FkIHdlbm4gaSB3aSBldHogYSBrbGkgZ3N0cmVzc3QgYmkgdnVtIFNjaGFmZmEgdW5kIGVtIFN0dWRpdW0uIEkgZnJldSBtaSB1aCBmZXNjaHQgdWZkIEZlcmkgaW0gRmVicnVhciwgZGEgd8O2cmQgc2VjaGVyIHVoIHNjaMO8YS4=",
        )}
      </p>
      <p>
        {decodeBase64(
          "TWl0IGRlbSBLYWxlbmRlciB3w7ZyIGkgZGVyIGdlcm4gZCBBZHZlbnRzeml0IGEga2xpIHZlcnPDvGVzc2EgdW5kIGhvZmYgZGFzIHNpIGthc2NoIGduw7xzc2EsIGJldm9yZCBkZW5uIGkgZGkgbGFuZ2EgV2llbmFjaHRzZmVyaSBrYXNjaCBnby4gSSBsaWViIGRpaSBtaW4gU2NoYXR6LCB1bmQgaG9mZiBkYXMgbWVyIG5vIGdhbnogdmllbCBXdWNoZWVuZCBkbyBpbSBTY2h3aXplcmhvZiBrb25uZCB2ZXJicmluZ2Eu",
        )}
      </p>
      <p>{decodeBase64("RGluIE5pbHM=")}</p>
    </div>
  );
}
