/* tslint:disable */
/* eslint-disable */
/**
* @param {number} a
* @param {number} b
*/
export function add(a: number, b: number): void;
/**
* @param {number} a
* @param {number} b
*/
export function subtract(a: number, b: number): void;
/**
* @param {number} a
* @param {number} b
*/
export function multiply(a: number, b: number): void;
/**
* @param {number} a
* @param {number} b
*/
export function divide(a: number, b: number): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly add: (a: number, b: number) => void;
  readonly subtract: (a: number, b: number) => void;
  readonly multiply: (a: number, b: number) => void;
  readonly divide: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
