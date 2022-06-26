class Grid {
    constructor(minWidth, minHeight) {
        this.minWidth = minWidth
        this.minHeight = minHeight
        this.objects = []
    }

    get width() {
        // console.log(this.objects.map(o => o.x + o.width))
        return Math.max(this.minWidth, ...this.objects.map(o => o.x + o.width))
    }


    get height() {
        // console.log(this.objects.map(o => o.y + o.height))
        return Math.max(this.minHeight, ...this.objects.map(o => o.y + o.height))
    }

    add(obj) {
        this.objects.push(obj)
    }

    remove(obj) {
        const index = this.objects.indexOf(obj);
        if (index >= 0) {
            this.objects.splice(index, 1)
        }
    }

}
export default Grid