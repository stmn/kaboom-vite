import kaboom from "kaboom";

const k = kaboom({
    background: [29, 35, 50],
});

k.loadSprite('kaboom', 'sprites/kaboom.png');

const t = (n = 1) => k.time() * n
const w = (a, b, n) => k.wave(a, b, t(n))

k.add([
    k.sprite('kaboom'),
    k.pos(k.width() / 2, k.height() / 2),
    k.origin('center'),
    {
        update() {
            this.scale = w(0.9, 1, 2);
        }
    }
]);