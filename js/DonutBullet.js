class DonutBullet extends Bullet {
    constructor(ctx, x, y, width, height, speed, img) {
        img = new Image();
        img.src = "imgs/bullets/donut.png";
        super(ctx, x, y, width, height, speed,img);
    }
}