class Goods {
    constructor(name, price, image, count) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.count = count;
    }

    draw() {
        let el = document.createElement('div');
        el.classList.add('goods');

        let h1 = document.createElement('H1');
        h1.innerHTML = this.name;

        let p = document.createElement('p');
        p.classList.add('price');
        p.innerHTML = this.price;

        let img = document.createElement('img');
        img.setAttribute('src', this.image);
        img.setAttribute('alt', this.name);

        el.append(h1);
        el.append(p);
        el.append(img);
        
        return el;
    }
}