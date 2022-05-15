use wasm_bindgen::prelude::*;
use std::fs;

// importing alert from javascript
#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

//exporting func to add 2 int
#[wasm_bindgen]
pub fn add(a: i32, b:i32) {
    let c = a+b;
    print_ans(c);

}

//exporting func to subtract 2 int
#[wasm_bindgen]
pub fn subtract(a: i32, b:i32) {
    let c = a-b;
    print_ans(c);
}

//exporting func to multiply 2 int
#[wasm_bindgen]
pub fn multiply(a: i32, b:i32) {
    let c = a*b;
    print_ans(c);
}

//exporting func to divide 2 int
#[wasm_bindgen]
pub fn divide(a: i32, b:i32) {
    let c = a/b;
    print_ans(c);
}

//func to print answer
pub fn print_ans(c: i32) {
    alert(&format!("The answer is {}", c));
}