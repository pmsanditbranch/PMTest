google.maps.__gjsload__('overlay', function(_) {
    var PC = function(a) {
            this.Eg = a
        },
        osa = function() {},
        QC = function(a) {
            a.bz = a.bz || new osa;
            return a.bz
        },
        psa = function(a) {
            this.Dh = new _.En(() => {
                const b = a.bz;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.sx && a.onAdd) a.onAdd();
                        b.sx = !0;
                        a.draw()
                    }
                } else {
                    if (b.sx)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.sx = !1
                }
            }, 0)
        },
        qsa = function(a, b) {
            const c = QC(a);
            let d = c.vw;
            d || (d = c.vw = new psa(a));
            _.Pb(c.Qh || [], _.Ck);
            var e = c.oi = c.oi || new _.mma;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.RC = c.RC || new PC(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.Fn(d.Dh);
            c.Qh = [_.Ak(a, "panes_changed", e), _.Ak(f, "zoom_changed", e), _.Ak(f, "offset_changed", e), _.Ak(b, "projection_changed", e), _.Ak(f, "projectioncenterq_changed", e)];
            _.Fn(d.Dh);
            b instanceof _.Yk ? (_.Ll(b, "Ox"), _.L(b, 148440)) : b instanceof _.im && (_.Ll(b, "Oxs"),
                _.L(b, 181451))
        },
        vsa = function(a) {
            if (a) {
                var b = a.getMap();
                if (rsa(a) !== b && b && b instanceof _.Yk) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new ssa(b, a, c.overlayLayer) : c.Fg.then(({
                        kh: d
                    }) => {
                        const e = new tsa(b, d);
                        d.Bi(e);
                        c.overlayLayer = e;
                        usa(a);
                        vsa(a)
                    })
                }
            }
        },
        usa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Eg.unbindAll(), b.Eg.set("panes", null), b.Eg.set("projection", null), b.Gg.ul(b), b.Fg && (b.Fg = !1, b.Eg.onRemove ? b.Eg.onRemove() : b.Eg.remove()))
            }
        },
        rsa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        wsa = function(a,
            b) {
            a.Eg.get("projection") != b && (a.Eg.bindTo("panes", a.map.__gm), a.Eg.set("projection", b))
        };
    _.Ja(PC, _.Sk);
    PC.prototype.changed = function(a) {
        a != "outProjection" && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.nj(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.Eg : null))
    };
    var RC = {};
    _.Ja(psa, _.Sk);
    RC.El = function(a) {
        if (a) {
            var b = a.getMap();
            (QC(a).AC || null) !== b && (b && qsa(a, b), QC(a).AC = b)
        }
    };
    RC.ul = function(a) {
        const b = QC(a);
        var c = b.oi;
        c && c.unbindAll();
        (c = b.RC) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Qh && _.Pb(b.Qh, _.Ck);
        b.Qh = null;
        b.vw && (b.vw.Dh.Ej(), b.vw = null);
        delete QC(a).AC
    };
    var SC = {},
        ssa = class {
            constructor(a, b, c) {
                this.map = a;
                this.Eg = b;
                this.Gg = c;
                this.Fg = !1;
                _.Ll(this.map, "Ox");
                _.L(this.map, 148440);
                c.El(this)
            }
            draw() {
                this.Fg || (this.Fg = !0, this.Eg.onAdd && this.Eg.onAdd());
                this.Eg.draw && this.Eg.draw()
            }
        },
        tsa = class {
            constructor(a, b) {
                this.Ig = a;
                this.Gg = b;
                this.Eg = null;
                this.Fg = []
            }
            dispose() {}
            ai(a, b, c, d, e, f, g, h) {
                const k = this.Eg = this.Eg || new _.Vz(this.Ig, this.Gg, () => {});
                k.ai(a, b, c, d, e, f, g, h);
                for (const m of this.Fg) wsa(m, k), m.draw()
            }
            El(a) {
                this.Fg.push(a);
                this.Eg && wsa(a, this.Eg);
                this.Gg.refresh()
            }
            ul(a) {
                _.Xb(this.Fg,
                    a)
            }
        };
    SC.El = vsa;
    SC.ul = usa;
    _.pk("overlay", {
        NA: function(a) {
            if (a) {
                (0, RC.ul)(a);
                (0, SC.ul)(a);
                var b = a.getMap();
                b && (b instanceof _.Yk ? (0, SC.El)(a) : (0, RC.El)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.Nv(a, {
                Vk: ({
                    event: b
                }) => {
                    _.Pt(b.Ih)
                },
                ak: b => _.yv(b),
                aq: b => _.zv(b),
                Wk: b => _.zv(b),
                vk: b => _.Av(b)
            }).Lr(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.yk);
            a.addEventListener("contextmenu", _.yk);
            a.addEventListener("dblclick", _.yk);
            a.addEventListener("mousedown", _.yk);
            a.addEventListener("mousemove", _.yk);
            a.addEventListener("MSPointerDown",
                _.yk);
            a.addEventListener("pointerdown", _.yk);
            a.addEventListener("touchstart", _.yk);
            a.addEventListener("wheel", _.yk)
        }
    });
});