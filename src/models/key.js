class KeyModel {
    constructor(keycode) {
        this.code = keycode
        this.label = keycode
    }

    plain() {
        return {
            code: this.code,
            label: this.label,
        }
    }
}

export default KeyModel