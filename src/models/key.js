class KeyModel {
    constructor(keycode) {
        this.code = keycode
    }

    plain() {
        return {
            code: this.code
        }
    }
}

export default KeyModel