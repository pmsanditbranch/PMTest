google.maps.__gjsload__('search_impl', function(_) {
    var Aqb = function(a, b) {
            _.G(a.Hg, 3, b)
        },
        Eqb = function(a, b, c) {
            const d = _.wK(new Bqb);
            c.Xq = (0, _.Fa)(d.load, d);
            c.clickable = a.get("clickable") != 0;
            _.fTa(c, _.uR(b));
            const e = [];
            e.push(_.Ak(c, "click", (0, _.Fa)(Cqb, null, a)));
            _.Pb(["mouseover", "mouseout", "mousemove"], function(f) {
                e.push(_.Ak(c, f, (0, _.Fa)(Dqb, null, a, f)))
            });
            e.push(_.Ak(a, "clickable_changed", function() {
                a.Eg.clickable = a.get("clickable") != 0
            }));
            a.Fg = e
        },
        Cqb = function(a, b, c, d, e) {
            let f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, e.getStatus() == 0)) {
                f.location = _.Z(e.Hg,
                    2) ? new _.Uj(_.zu(_.K(e.Hg, 2, _.Eu).Hg, 1), _.zu(_.K(e.Hg, 2, _.Eu).Hg, 2)) : null;
                f.fields = {};
                const g = _.Hi(e.Hg, 3);
                for (let h = 0; h < g; ++h) {
                    const k = _.zs(e.Hg, 3, _.FR, h);
                    f.fields[k.getKey()] = k.getValue()
                }
            }
            _.Ok(a, "click", b, c, d, f)
        },
        Dqb = function(a, b, c, d, e, f, g) {
            let h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.Ok(a, b, c, d, e, h, g)
        },
        Fqb = function() {},
        Gqb = class extends _.U {
            constructor() {
                super()
            }
            aj() {
                return _.Zi(this.Hg, 2)
            }
        },
        Hqb = [_.O, , , _.Lq, _.nUa];
    var Iqb = class extends _.U {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.I(this.Hg, 1, -1)
        }
        getLocation() {
            return _.Ri(this.Hg, 2, _.Eu)
        }
    };
    var Bqb = class {
        constructor() {
            var a = _.Gp,
                b = _.Dp;
            this.Fg = _.aj;
            this.Eg = _.us(_.qy, a, _.Nz + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(g) {
                g = new Iqb(g);
                b(g)
            }
            var d = new Gqb;
            _.G(d.Hg, 1, a.layerId.split("|")[0]);
            _.G(d.Hg, 2, a.featureId);
            Aqb(d, this.Fg.Eg().Eg());
            for (var e in a.parameters) {
                var f = _.Ui(d.Hg, 4, _.FR);
                _.G(f.Hg, 1, e);
                _.G(f.Hg, 2, a.parameters[e])
            }
            a = _.Oi(d.xi(), Hqb, 1);
            this.Eg(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    Fqb.prototype.WE = function(a) {
        if (_.Un[15]) {
            var b = a.Ig;
            const c = a.Ig = a.getMap();
            b && a.Eg && (a.Gg ? (b = b.__gm.Xj, b.set(b.get().En(a.Eg))) : a.Eg && _.CTa(a.Eg, b) && (_.Pb(a.Fg || [], _.Ck), a.Fg = null));
            if (c) {
                b = new _.zx;
                const d = a.get("layerId").split("|");
                b.layerId = d[0];
                for (let e = 1; e < d.length; ++e) {
                    const [f, ...g] = d[e].split(":");
                    b.parameters[f] = g.join(":")
                }
                a.get("spotlightDescription") && (b.spotlightDescription = new _.Sx(a.get("spotlightDescription")));
                a.get("paintExperimentIds") && (b.paintExperimentIds = a.get("paintExperimentIds").slice(0));
                a.get("styler") && (b.styler = new _.Kx(a.get("styler")));
                a.get("roadmapStyler") && (b.roadmapStyler = new _.Kx(a.get("roadmapStyler")));
                a.get("travelMapRequest") && (b.travelMapRequest = new _.Mla(a.get("travelMapRequest")));
                a.get("mapsApiLayer") && (b.mapsApiLayer = new _.Fx(a.get("mapsApiLayer")));
                a.get("mapFeatures") && (b.mapFeatures = a.get("mapFeatures"));
                a.get("clickableCities") && (b.clickableCities = a.get("clickableCities"));
                a.get("searchPipeMetadata") && (b.searchPipeMetadata = new _.wz(a.get("searchPipeMetadata")));
                a.get("gmmContextPipeMetadata") && (b.gmmContextPipeMetadata = new _.Zja(a.get("gmmContextPipeMetadata")));
                a.get("overlayLayer") && (b.overlayLayer = new _.Tx(a.get("overlayLayer")));
                a.get("caseExperimentIds") && (b.caseExperimentIds = a.get("caseExperimentIds").slice(0));
                a.get("boostMapExperimentIds") && (b.boostMapExperimentIds = a.get("boostMapExperimentIds").slice(0));
                a.get("airQualityPipeMetadata") && (b.airQualityPipeMetadata = new _.qla(a.get("airQualityPipeMetadata")));
                a.get("directionsPipeParameters") && (b.directionsPipeParameters =
                    new _.kA(a.get("directionsPipeParameters")));
                a.get("clientSignalPipeMetadata") && (b.clientSignalPipeMetadata = new _.Gja(a.get("clientSignalPipeMetadata")));
                b.darkLaunch = !!a.get("darkLaunch");
                a.Eg = b;
                a.Gg = a.get("renderOnBaseMap");
                a.Gg ? (a = c.__gm.Xj, a.set(a.get().Fl(b))) : Eqb(a, c, b);
                _.Ll(c, "Lg");
                _.L(c, 148282)
            }
        }
    };
    _.pk("search_impl", new Fqb);
});