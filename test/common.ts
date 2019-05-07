import * as builder from "xmlbuilder";
import * as assert from "assert";
import * as xpath from "xpath";
import { Writable } from "stream";

export { builder };
export { assert };
export { xpath };

export { create as xml, begin as doc, stringWriter as writer } from "xmlbuilder";
export { ok, strictEqual as eq, throws as err, doesNotThrow as noterr } from "assert";

export function isan(obj: Object, type): void {
  const clas = obj.constructor.name;
  assert.strictEqual(clas, type);
}

export function captureStream(stream: Writable): { unhook: () => void, captured: () => string } {
  const oldWrite = stream.write;
  let buf = '';
  stream.write = function(chunk: any, encoding: string | ((error: Error | null | undefined) => void), cb?: (error: Error | null | undefined) => void): boolean {
    buf += chunk.toString();
    return true;
  }
  
  return {
    unhook: () => stream.write = oldWrite,
    captured: () => buf
  };
}

export function xmleleend(arg: any): string {
  return builder.create('root', { headless: true }).ele(arg).end();
}

