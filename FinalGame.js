//puts all the files together
"use strict";
! function e(t, n, r) { //Prepares the game for execution using all files
    function o(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var c = "function" == typeof require && require;
                if (!s && c)
                    return c(a, !0);
                if (i)
                    return i(a, !0);
            }
            var l = n[a] = { exports: {} };
            t[a][0].call(l.exports, function(e) { var n = t[a][1][e]; return o(n || e) }, l, l.exports, e, t, n, r)
        }
        return n[a].exports
    }
    for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
    return o
}({
    1: [function(e, t, n) { //processes the code to run in the browser
        function u(e, t) { this.fun = e, this.array = t }

        function l() {}
        var f, h, p = t.exports = {};
        ! function() { try { f = "function" == typeof setTimeout ? setTimeout : r } catch (e) { f = r } try { h = "function" == typeof clearTimeout ? clearTimeout : o } catch (e) { h = o } }();
        var d, y = [],
            v = !1,
            b = -1;
        p.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            y.push(new u(e, t)), 1 !== y.length || v || i(c)
        }, u.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = l, p.addListener = l, p.once = l, p.off = l, p.removeListener = l, p.removeAllListeners = l, p.emit = l, p.cwd = function() { return "/" }, p.umask = function() { return 0 }
    }, {}],

    2: [function(e, t, n) { //Incorporates the base game and the board, allows the game to be played
        Object.defineProperty(n, "__esModule", { value: !0 }), e("es6-promise/auto");
        var r = e("./game"),
            o = e("./board");
        document.addEventListener("DOMContentLoaded", function() { //Determines game mode and acts accordingly
            var e = document.querySelector("canvas");
            if (e) {
                var n = document.querySelector(".mode-chooser-submit");
                n && n.addEventListener("click", function() {
                    var e = document.querySelector(".mode");
                    if (e) {
                        for (var t = document.querySelectorAll(".mode-chooser-input"), n = null, o = 0; o < t.length && !(n = t[o].checked ? t[o].value : null); o++);
                        n || (n = "offline-ai"), "offline-human" === n ? r.initGameLocal2p() : "offline-ai" === n && r.initGameLocalAi(),
                            e.classList.add("invisible"), e.addEventListener("transitionend", function() { e.classList.add("hidden") })
                    }
                })
            }
        })
    }, { "./board": 3, "./game": 8, "es6-promise/auto": 16 }],

    3: [function(e, t, n) { //Used for determining the winner, plus resets the board when done
        //This also gives most game functionality (animations, filling in the pieces, etc.)
        //This also sets up the board's properties (i.e. piece colors, board color, etc.)
        //It's the functionality from Board
        var r = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function a(e) { try { c(r.next(e)) } catch (e) { i(e) } }

                    function s(e) { try { c(r.throw(e)) } catch (e) { i(e) } }

                    function c(e) { e.done ? o(e.value) : new n(function(t) { t(e.value) }).then(a, s) }
                    c((r = r.apply(e, t || [])).next())
                })
            },
            o = this && this.__generator || function(e, t) {
                function n(e) { return function(t) { return r([e, t]) } }

                function r(n) {
                    for (; c;) try {
                        if (o = 1, i && (a = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(a = a.call(i, n[1])).done) return a;
                        switch (i = 0, a && (n = [0, a.value]), n[0]) {
                            case 0:
                            case 1:
                                a = n;
                                break;
                            case 4:
                                return c.label++, { value: n[1], done: !1 };
                            case 5:
                                c.label++, i = n[1], n = [0];
                                continue;
                            case 7:
                                n = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (a = c.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) { c = 0; continue }
                                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) { c.label = n[1]; break }
                                if (6 === n[0] && c.label < a[1]) { c.label = a[1], a = n; break }
                                if (a && c.label < a[2]) { c.label = a[2], c.ops.push(n); break }
                                a[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        n = t.call(e, c)
                    } catch (e) { n = [6, e], i = 0 } finally { o = a = 0 }
                    if (5 & n[0]) throw n[1];
                    return { value: n[0] ? n[1] : void 0, done: !0 }
                }
                var o, i, a, s, c = { label: 0, sent: function() { if (1 & a[0]) throw a[1]; return a[1] }, trys: [], ops: [] };
                return s = { next: n(0), throw: n(1), return: n(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function() { return this }), s
            };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var i, a = e("./utils");
        ! function(e) { e[e.EMPTY = 0] = "EMPTY", e[e.PLAYER_1 = 1] = "PLAYER_1", e[e.PLAYER_2 = 2] = "PLAYER_2", e[e.DRAW = 3] = "DRAW" }(i = n.BoardPiece || (n.BoardPiece = {}));
        var s = function() {
            function e(e) { this.canvas = e, this.context = e.getContext("2d"), this.getBoardScale(), this.initConstants(), this.reset(), this.onresize() }
            return e.prototype.reset = function() {
                this.map = [];
                for (var t = 0; t < e.ROWS; t++) { this.map.push([]); for (var n = 0; n < e.COLUMNS; n++) this.map[t].push(i.EMPTY) }
                this.winnerBoardPiece = i.EMPTY, a.Utils.clearCanvas(this)
            }, e.prototype.getBoardScale = function() { return e.SCALE = window.innerWidth < 640 ? .5 : 1 }, e.prototype.initConstants = function() { e.CANVAS_HEIGHT = 480 * e.SCALE, e.CANVAS_WIDTH = 640 * e.SCALE, e.PIECE_RADIUS = 25 * e.SCALE, e.MASK_X_BEGIN = Math.max(0, e.CANVAS_WIDTH - (3 * e.COLUMNS + 1) * e.PIECE_RADIUS) / 2, e.MASK_Y_BEGIN = Math.max(0, e.CANVAS_HEIGHT - (3 * e.ROWS + 1) * e.PIECE_RADIUS) / 2, e.MESSAGE_WIDTH = 400 * e.SCALE, e.MESSAGE_X_BEGIN = (e.CANVAS_WIDTH - e.MESSAGE_WIDTH) / 2, e.MESSAGE_Y_BEGIN = 20 * e.SCALE, this.canvas.width = e.CANVAS_WIDTH, this.canvas.height = e.CANVAS_HEIGHT }, e.prototype.onresize = function() {
                var t = this,
                    n = e.SCALE;
                a.Utils.onresize().add(function() { t.getBoardScale(), n !== e.SCALE && (n = e.SCALE, t.initConstants(), a.Utils.clearCanvas(t), t.render()) })
            }, e.prototype.applyPlayerAction = function(t, n) {
                return r(this, void 0, void 0, function() {
                    var r, s, c;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (this.map[0][n] !== i.EMPTY || n < 0 || n >= e.COLUMNS) return [2, !1];
                                for (r = !1, s = 0, c = 0; c < e.ROWS - 1; c++)
                                    if (this.map[c + 1][n] !== i.EMPTY) { r = !0, s = c; break }
                                return r || (s = e.ROWS - 1), [4, this.animateAction(s, n, t.boardPiece)];
                            case 1:
                                return o.sent(), this.map[s][n] = t.boardPiece, this.debug(), [4, a.Utils.animationFrame()];
                            case 2:
                                return o.sent(), this.render(), [2, !0]
                        }
                    })
                })
            }, e.prototype.debug = function() { console.log(this.map.map(function(e) { return e.join(" ") }).join("\n")) }, e.prototype.getWinner = function() {
                var t = this;
                if (this.winnerBoardPiece !== i.EMPTY) return this.winnerBoardPiece;
                for (var n = [
                        [0, -1],
                        [0, 1],
                        [-1, -1],
                        [-1, 0],
                        [-1, 1],
                        [1, -1],
                        [1, 0],
                        [1, 1]
                    ], r = function(n, o, i, a, s) { return s >= 4 || !(n < 0 || o < 0 || n >= e.ROWS || o >= e.COLUMNS || t.map[n][o] !== i) && r(n + a[0], o + a[1], i, a, s + 1) }, o = 0, a = 0; a < e.ROWS; a++)
                    for (var s = 0; s < e.COLUMNS; s++) {
                        var c = this.map[a][s];
                        if (c !== i.EMPTY) {
                            for (var u = 0; u < n.length; u++)
                                if (r(a + n[u][0], s + n[u][1], c, n[u], 1)) return this.winnerBoardPiece = c
                        } else o++
                    }
                return 0 === o ? this.winnerBoardPiece = i.DRAW : i.EMPTY
            }, e.prototype.announceWinner = function() {
                if (this.winnerBoardPiece !== i.EMPTY) {
                    var e = "<h1>Thank you for playing.</h1>";
                    this.winnerBoardPiece === i.DRAW ? e += "It's a draw" : e += "Player " + this.winnerBoardPiece + " wins", e += ".<br />After dismissing this message, click the board to reset game.", a.Utils.showMessage(e)
                }
            }, e.prototype.getPlayerColor = function(t) {
                switch (t) {
                    case i.PLAYER_1:
                        return e.PLAYER_1_COLOR;
                    case i.PLAYER_2:
                        return e.PLAYER_2_COLOR;
                    default:
                        return "transparent"
                }
            }, e.prototype.animateAction = function(t, n, i) {
                return r(this, void 0, void 0, function() {
                    var s, c, u, l = this;
                    return o(this, function(f) {
                        switch (f.label) {
                            case 0:
                                s = this.getPlayerColor(i), c = 0, u = function() { return r(l, void 0, void 0, function() { return o(this, function(t) { return a.Utils.clearCanvas(this), a.Utils.drawCircle(this.context, { x: 3 * e.PIECE_RADIUS * n + e.MASK_X_BEGIN + 2 * e.PIECE_RADIUS, y: c + e.MASK_Y_BEGIN + 2 * e.PIECE_RADIUS, r: e.PIECE_RADIUS, fillStyle: s, strokeStyle: e.PIECE_STROKE_STYLE }), this.render(), c += e.PIECE_RADIUS, [2] }) }) }, f.label = 1;
                            case 1:
                                return 3 * t * e.PIECE_RADIUS >= c ? [4, a.Utils.animationFrame()] : [3, 3];
                            case 2:
                                return f.sent(), u(), [3, 1];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.prototype.render = function() { //renders the game board
                a.Utils.drawMask(this);
                for (var t = 0; t < e.ROWS; t++)
                    for (var n = 0; n < e.COLUMNS; n++) a.Utils.drawCircle(this.context, { x: 3 * e.PIECE_RADIUS * n + e.MASK_X_BEGIN + 2 * e.PIECE_RADIUS, y: 3 * e.PIECE_RADIUS * t + e.MASK_Y_BEGIN + 2 * e.PIECE_RADIUS, r: e.PIECE_RADIUS, fillStyle: this.getPlayerColor(this.map[t][n]), strokeStyle: e.PIECE_STROKE_STYLE })
            }, e.ROWS = 6, e.COLUMNS = 7, e.PLAYER_1_COLOR = "red", e.PLAYER_2_COLOR = "black", e.PIECE_STROKE_STYLE = "white", e.MASK_COLOR = "goldenrod", e
        }();
        n.Board = s
    }, { "./utils": 15 }],

    4: [function(e, t, n) { //Used to determine the winner of a given game,
        //plus gives functionality regardless of game type
        var r = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function a(e) { try { c(r.next(e)) } catch (e) { i(e) } }

                    function s(e) { try { c(r.throw(e)) } catch (e) { i(e) } }

                    function c(e) { e.done ? o(e.value) : new n(function(t) { t(e.value) }).then(a, s) }
                    c((r = r.apply(e, t || [])).next())
                })
            },
            o = this && this.__generator || function(e, t) {
                function n(e) { return function(t) { return r([e, t]) } }

                function r(n) {
                    for (; c;) try {
                        if (o = 1, i && (a = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(a = a.call(i, n[1])).done) return a;
                        switch (i = 0, a && (n = [0, a.value]), n[0]) {
                            case 0:
                            case 1:
                                a = n;
                                break;
                            case 4:
                                return c.label++, { value: n[1], done: !1 };
                            case 5:
                                c.label++, i = n[1], n = [0];
                                continue;
                            case 7:
                                n = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (a = c.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) { c = 0; continue }
                                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) { c.label = n[1]; break }
                                if (6 === n[0] && c.label < a[1]) { c.label = a[1], a = n; break }
                                if (a && c.label < a[2]) { c.label = a[2], c.ops.push(n); break }
                                a[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        n = t.call(e, c)
                    } catch (e) { n = [6, e], i = 0 } finally { o = a = 0 }
                    if (5 & n[0]) throw n[1];
                    return { value: n[0] ? n[1] : void 0, done: !0 }
                }
                var o, i, a, s, c = { label: 0, sent: function() { if (1 & a[0]) throw a[1]; return a[1] }, trys: [], ops: [] };
                return s = { next: n(0), throw: n(1), return: n(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function() { return this }), s
            };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var i = e("../board"),
            a = function() {
                function e(e, t) { this.board = new i.Board(t), this.players = e, this.currentPlayerId = 0, this.reset() }
                return e.prototype.reset = function() { this.isMoveAllowed = !1, this.isGameWon = !1, this.board.reset(), this.board.render(), this.board.debug() }, e.prototype.start = function() {
                    return r(this, void 0, void 0, function() {
                        var e;
                        return o(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    this.isMoveAllowed = !0, t.label = 1;
                                case 1:
                                    return this.isGameWon ? [3, 3] : [4, this.move()];
                                case 2:
                                    return t.sent(), (e = this.board.getWinner()) !== i.BoardPiece.EMPTY ? (console.log("Game over: winner is player ", e), this.isGameWon = !0, this.isMoveAllowed = !1, this.board.announceWinner(), [3, 3]) : [3, 1];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.move = function() {
                    return r(this, void 0, void 0, function() {
                        var e, t, n;
                        return o(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (!this.isMoveAllowed) return [2];
                                    e = this.players[this.currentPlayerId], t = !1, r.label = 1;
                                case 1:
                                    return t ? [3, 4] : [4, e.getAction(this.board)];
                                case 2:
                                    return n = r.sent(), this.isMoveAllowed = !1, [4, this.board.applyPlayerAction(e, n)];
                                case 3:
                                    return t = r.sent(), this.isMoveAllowed = !0, t ? this.afterMove(n) : console.log("Move not allowed! Try again."), [3, 1];
                                case 4:
                                    return this.currentPlayerId = this.getNextPlayer(), [2]
                            }
                        })
                    })
                }, e.prototype.afterMove = function(e) {}, e.prototype.getNextPlayer = function() { return 0 === this.currentPlayerId ? 1 : 0 }, e
            }();
        n.GameBase = a
    }, { "../board": 3 }],

    5: [function(e, t, n) { //Incorporates the base player, board, game base, and the Utils
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("./game-base"),
            s = e("../player"),
            c = e("../board"),
            u = e("../utils"),
            l = function(e) {
                function t(t, n, r) { void 0 === r && (r = !1); var o = e.call(this, t, n) || this; return o.BASE_URL = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")), o.browser = navigator, o.isAcceptingPlayer = !0, o.clientMode = r, r ? (o.playerSlave = t[0], o.playerMaster = t[1], o.initClient()) : (o.playerMaster = t[0], o.playerSlave = t[1], o.initServer()), o }
                return r(t, e), t.prototype.afterMove = function(e) {
                    (this.clientMode && 1 === this.currentPlayerId || !this.clientMode && 0 === this.currentPlayerId)
                }, t
            }(a.GameBase);
    }, { "../board": 3, "../player": 9, "../utils": 15, "./game-base": 4 }],

    6: [function(e, t, n) { //Functionality for 2-Player Game
        var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) };
                return function(t, n) {
                    function r() { this.constructor = t }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            o = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function a(e) { try { c(r.next(e)) } catch (e) { i(e) } }

                    function s(e) { try { c(r.throw(e)) } catch (e) { i(e) } }

                    function c(e) { e.done ? o(e.value) : new n(function(t) { t(e.value) }).then(a, s) }
                    c((r = r.apply(e, t || [])).next())
                })
            },
            i = this && this.__generator || function(e, t) {
                function n(e) { return function(t) { return r([e, t]) } }

                function r(n) {
                    for (; c;) try {
                        if (o = 1, i && (a = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(a = a.call(i, n[1])).done) return a;
                        switch (i = 0, a && (n = [0, a.value]), n[0]) {
                            case 0:
                            case 1:
                                a = n;
                                break;
                            case 4:
                                return c.label++, { value: n[1], done: !1 };
                            case 5:
                                c.label++, i = n[1], n = [0];
                                continue;
                            case 7:
                                n = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (a = c.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) { c = 0; continue }
                                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) { c.label = n[1]; break }
                                if (6 === n[0] && c.label < a[1]) { c.label = a[1], a = n; break }
                                if (a && c.label < a[2]) { c.label = a[2], c.ops.push(n); break }
                                a[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        n = t.call(e, c)
                    } catch (e) { n = [6, e], i = 0 } finally { o = a = 0 }
                    if (5 & n[0]) throw n[1];
                    return { value: n[0] ? n[1] : void 0, done: !0 }
                }
                var o, i, a, s, c = { label: 0, sent: function() { if (1 & a[0]) throw a[1]; return a[1] }, trys: [], ops: [] };
                return s = { next: n(0), throw: n(1), return: n(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function() { return this }), s
            };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../board"),
            s = e("./game-base"),
            c = e("../player"),
            u = e("../utils"),
            l = function(e) {
                function t(t, n) { return e.call(this, t, n) || this }
                return r(t, e), t
            }(s.GameBase);
        n.initGameLocal2p = function() { //Functionality for 2-player game
            var e = this,
                t = document.querySelector("canvas");
            if (t) {
                var n = new l([new c.PlayerHuman(a.BoardPiece.PLAYER_1, t), new c.PlayerHuman(a.BoardPiece.PLAYER_2, t)], t);
                n.start(), t.addEventListener("click", function() {
                    return o(e, void 0, void 0, function() {
                        return i(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return n.isGameWon ? (n.reset(), [4, u.Utils.animationFrame()]) : [3, 2];
                                case 1:
                                    e.sent(), n.start(), e.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                })
            }
        }
    }, { "../board": 3, "../player": 9, "../utils": 15, "./game-base": 4 }],

    7: [function(e, t, n) { //Sets up an AI game (Player vs. AI)
        var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) };
                return function(t, n) {
                    function r() { this.constructor = t }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            o = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function a(e) { try { c(r.next(e)) } catch (e) { i(e) } }

                    function s(e) { try { c(r.throw(e)) } catch (e) { i(e) } }

                    function c(e) { e.done ? o(e.value) : new n(function(t) { t(e.value) }).then(a, s) }
                    c((r = r.apply(e, t || [])).next())
                })
            },
            i = this && this.__generator || function(e, t) {
                function n(e) { return function(t) { return r([e, t]) } }

                function r(n) { //AI Functionality
                    for (; c;) try {
                        if (o = 1, i && (a = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(a = a.call(i, n[1])).done) return a;
                        switch (i = 0, a && (n = [0, a.value]), n[0]) {
                            case 0:
                            case 1:
                                a = n;
                                break;
                            case 4:
                                return c.label++, { value: n[1], done: !1 };
                            case 5:
                                c.label++, i = n[1], n = [0];
                                continue;
                            case 7:
                                n = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (a = c.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) { c = 0; continue }
                                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) { c.label = n[1]; break }
                                if (6 === n[0] && c.label < a[1]) { c.label = a[1], a = n; break }
                                if (a && c.label < a[2]) { c.label = a[2], c.ops.push(n); break }
                                a[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        n = t.call(e, c)
                    } catch (e) { n = [6, e], i = 0 } finally { o = a = 0 }
                    if (5 & n[0]) throw n[1];
                    return { value: n[0] ? n[1] : void 0, done: !0 }
                }
                var o, i, a, s, c = { label: 0, sent: function() { if (1 & a[0]) throw a[1]; return a[1] }, trys: [], ops: [] };
                return s = { next: n(0), throw: n(1), return: n(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function() { return this }), s
            };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("../board"),
            s = e("./game-base"),
            c = e("../player"),
            u = e("../utils"),
            l = function(e) {
                function t(t, n) { return e.call(this, t, n) || this }
                return r(t, e), t
            }(s.GameBase);
        n.initGameLocalAi = function() {
            var e = this,
                t = document.querySelector("canvas");
            if (t) {
                var n = new l([new c.PlayerHuman(a.BoardPiece.PLAYER_1, t), new c.PlayerAi(a.BoardPiece.PLAYER_2, t)], t);
                n.start(), t.addEventListener("click", function() { //Functionality for Player vs AI game
                    return o(e, void 0, void 0, function() {
                        return i(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return n.isGameWon ? (n.reset(), [4, u.Utils.animationFrame()]) : [3, 2];
                                case 1:
                                    e.sent(), n.start(), e.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                })
            }
        }
    }, { "../board": 3, "../player": 9, "../utils": 15, "./game-base": 4 }],

    8: [function(e, t, n) { //Implements they functionalities of the game types,
        //regardless of what type of game it is (2 human players, or player vs AI)
        function r(e) { for (var t in e) n.hasOwnProperty(t) || (n[t] = e[t]) }
        Object.defineProperty(n, "__esModule", { value: !0 }), r(e("./game-local-2p")), r(e("./game-local-ai"))
    }, { "./game-local-2p": 6, "./game-local-ai": 7 }],

    9: [function(e, t, n) { //Implements the functionalities of the players of the game,
        //regardless of what type of player it is (main player, 2nd player, or AI)
        function r(e) { for (var t in e) n.hasOwnProperty(t) || (n[t] = e[t]) }
        Object.defineProperty(n, "__esModule", { value: !0 }), r(e("./player")), r(e("./player-ai")), r(e("./player-human"))
    }, { "./player": 14, "./player-ai": 10, "./player-human": 13 }],

    10: [function(e, t, n) { //Functionality for the AI player
        var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) };
                return function(t, n) {
                    function r() { this.constructor = t }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            o = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function a(e) { try { c(r.next(e)) } catch (e) { i(e) } }

                    function s(e) { try { c(r.throw(e)) } catch (e) { i(e) } }

                    function c(e) { e.done ? o(e.value) : new n(function(t) { t(e.value) }).then(a, s) }
                    c((r = r.apply(e, t || [])).next())
                })
            },
            i = this && this.__generator || function(e, t) {
                function n(e) { return function(t) { return r([e, t]) } }

                function r(n) {
                    for (; c;) try {
                        if (o = 1, i && (a = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(a = a.call(i, n[1])).done) return a;
                        switch (i = 0, a && (n = [0, a.value]), n[0]) {
                            case 0:
                            case 1:
                                a = n;
                                break;
                            case 4:
                                return c.label++, { value: n[1], done: !1 };
                            case 5:
                                c.label++, i = n[1], n = [0];
                                continue;
                            case 7:
                                n = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (a = c.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) { c = 0; continue }
                                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) { c.label = n[1]; break }
                                if (6 === n[0] && c.label < a[1]) { c.label = a[1], a = n; break }
                                if (a && c.label < a[2]) { c.label = a[2], c.ops.push(n); break }
                                a[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        n = t.call(e, c)
                    } catch (e) { n = [6, e], i = 0 } finally { o = a = 0 }
                    if (5 & n[0]) throw n[1];
                    return { value: n[0] ? n[1] : void 0, done: !0 }
                }
                var o, i, a, s, c = { label: 0, sent: function() { if (1 & a[0]) throw a[1]; return a[1] }, trys: [], ops: [] };
                return s = { next: n(0), throw: n(1), return: n(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function() { return this }), s
            };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("./player"),
            s = e("../board"),
            c = e("../utils"),
            u = function(e) {
                function t(t, n) { var r = e.call(this, t, n) || this; return r.ownBoardPieceValue = r.getBoardPieceValue(t), r.enemyBoardPiece = t === s.BoardPiece.PLAYER_1 ? s.BoardPiece.PLAYER_2 : s.BoardPiece.PLAYER_1, r }
                return r(t, e), t.prototype.getBoardPieceValue = function(e) { return e === s.BoardPiece.EMPTY ? 0 : e === this.boardPiece ? 1 : -1 }, t.prototype.getStateValue = function(e) {
                    for (var t = s.BoardPiece.EMPTY, n = 0, r = 0; r < s.Board.ROWS; r++)
                        for (var o = 0; o < s.Board.COLUMNS; o++) {
                            for (var i = 0, a = 0, c = 0, u = 0, l = 0; l <= 3; l++) o + l < s.Board.COLUMNS && (i += this.getBoardPieceValue(e[r][o + l])), r + l < s.Board.ROWS && (a += this.getBoardPieceValue(e[r + l][o])), r + l < s.Board.ROWS && o + l < s.Board.COLUMNS && (c += this.getBoardPieceValue(e[r + l][o + l])), r - l >= 0 && o + l < 7 && (u += this.getBoardPieceValue(e[r - l][o + l]));
                            n += i * i * i, n += a * a * a, n += c * c * c, n += u * u * u, 4 === Math.abs(i) ? t = i > 0 ? this.boardPiece : this.enemyBoardPiece : 4 === Math.abs(a) ? t = a > 0 ? this.boardPiece : this.enemyBoardPiece : 4 === Math.abs(c) ? t = c > 0 ? this.boardPiece : this.enemyBoardPiece : 4 === Math.abs(u) && (t = u > 0 ? this.boardPiece : this.enemyBoardPiece)
                        }
                    return { winnerBoardPiece: t, chain: n }
                }, t.prototype.transformValues = function(e, t, n) {
                    var r = t === this.boardPiece,
                        o = t === this.enemyBoardPiece;
                    return r ? e = c.Utils.BIG_POSITIVE_NUMBER - 100 : o && (e = c.Utils.BIG_NEGATIVE_NUMBER + 100), e -= n * n
                }, t.prototype.getMove = function(e, n, r, o) {
                    var i = this.getStateValue(e),
                        a = i.winnerBoardPiece === this.boardPiece,
                        s = i.winnerBoardPiece === this.enemyBoardPiece;
                    return n >= t.MAX_DEPTH || a || s ? { value: this.transformValues(i.chain * this.ownBoardPieceValue, i.winnerBoardPiece, n), move: -1 } : n % 2 == 0 ? this.minState(e, n + 1, r, o) : this.maxState(e, n + 1, r, o)
                }, t.prototype.maxState = function(e, t, n, r) {
                    for (var o = c.Utils.BIG_NEGATIVE_NUMBER, i = [], a = 0; a < s.Board.COLUMNS; a++) {
                        var u = c.Utils.getMockPlayerAction(e, this.boardPiece, a),
                            l = u.success,
                            f = u.map;
                        if (l) {
                            var h = this.getMove(f, t, n, r),
                                p = h.value;
                            h.move;
                            if (p > o ? (o = p, i = [a]) : p === o && i.push(a), o > r) return { value: o, move: c.Utils.choose(i) };
                            n = Math.max(n, o)
                        }
                    }
                    return { value: o, move: c.Utils.choose(i) }
                }, t.prototype.minState = function(e, t, n, r) {
                    for (var o = c.Utils.BIG_POSITIVE_NUMBER, i = [], a = 0; a < s.Board.COLUMNS; a++) {
                        var u = c.Utils.getMockPlayerAction(e, this.enemyBoardPiece, a),
                            l = u.success,
                            f = u.map;
                        if (l) {
                            var h = this.getMove(f, t, n, r),
                                p = h.value;
                            h.move;
                            if (p < o ? (o = p, i = [a]) : p === o && i.push(a), o < n) return { value: o, move: c.Utils.choose(i) };
                            r = Math.min(r, o)
                        }
                    }
                    return { value: o, move: c.Utils.choose(i) }
                }, t.prototype.getAction = function(e) { return o(this, void 0, void 0, function() { var t, n; return i(this, function(r) { return t = c.Utils.clone(e.map), n = this.maxState(t, 0, c.Utils.BIG_NEGATIVE_NUMBER, c.Utils.BIG_POSITIVE_NUMBER), console.log("AI " + this.boardPiece + " choose column " + n.move + " with value of " + n.value), [2, n.move] }) }) }, t.MAX_DEPTH = 4, t
            }(a.Player);
        n.PlayerAi = u
    }, { "../board": 3, "../utils": 15, "./player": 14 }],

    13: [function(e, t, n) { //Functionality for the 2nd player in a Player vs. Player game
        var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) };
                return function(t, n) {
                    function r() { this.constructor = t }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            o = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function a(e) { try { c(r.next(e)) } catch (e) { i(e) } }

                    function s(e) { try { c(r.throw(e)) } catch (e) { i(e) } }

                    function c(e) { e.done ? o(e.value) : new n(function(t) { t(e.value) }).then(a, s) }
                    c((r = r.apply(e, t || [])).next())
                })
            },
            i = this && this.__generator || function(e, t) {
                function n(e) { return function(t) { return r([e, t]) } }

                function r(n) {
                    for (; c;) try {
                        if (o = 1, i && (a = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(a = a.call(i, n[1])).done) return a;
                        switch (i = 0, a && (n = [0, a.value]), n[0]) {
                            case 0:
                            case 1:
                                a = n;
                                break;
                            case 4:
                                return c.label++, { value: n[1], done: !1 };
                            case 5:
                                c.label++, i = n[1], n = [0];
                                continue;
                            case 7:
                                n = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (a = c.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) { c = 0; continue }
                                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) { c.label = n[1]; break }
                                if (6 === n[0] && c.label < a[1]) { c.label = a[1], a = n; break }
                                if (a && c.label < a[2]) { c.label = a[2], c.ops.push(n); break }
                                a[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        n = t.call(e, c)
                    } catch (e) { n = [6, e], i = 0 } finally { o = a = 0 }
                    if (5 & n[0]) throw n[1];
                    return { value: n[0] ? n[1] : void 0, done: !0 }
                }
                var o, i, a, s, c = { label: 0, sent: function() { if (1 & a[0]) throw a[1]; return a[1] }, trys: [], ops: [] };
                return s = { next: n(0), throw: n(1), return: n(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function() { return this }), s
            };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = e("./player"),
            s = e("../board"),
            c = e("../utils"),
            u = function(e) {
                function t(t, n) { var r = e.call(this, t, n) || this; return r.clickPromiseResolver = null, n.addEventListener("click", function(e) { try { r.handleClick(e) } catch (e) { console.error(e) } }), r }
                return r(t, e), t.prototype.doAction = function(e) { this.clickPromiseResolver && 0 <= e && e < s.Board.COLUMNS && this.clickPromiseResolver(e) }, t.prototype.handleClick = function(e) {
                    var t = this.canvas.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        r = e.clientY - t.top,
                        o = c.Utils.getColumnFromCoord({ x: n, y: r });
                    this.doAction(o)
                }, t.prototype.getAction = function(e) { return o(this, void 0, void 0, function() { var e = this; return i(this, function(t) { return [2, new Promise(function(t) { return e.clickPromiseResolver = t })] }) }) }, t
            }(a.Player);
        n.PlayerHuman = u
    }, { "../board": 3, "../utils": 15, "./player": 14 }],

    14: [function(e, t, n) { //Passes turn between players after each of their moves
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = function() { return function(e, t) { this.boardPiece = e, this.canvas = t } }();
        n.Player = r
    }, {}],

    15: [function(e, t, n) { //Functionality from Utils for animations, filling in the pieces, etc.
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("./board"),
            o = function() {
                function e() {}
                return e.showMessage = function(e) {
                    void 0 === e && (e = "");
                    var t = document.querySelector(".message");
                    if (t) {
                        t.classList.remove("hidden");
                        var n = document.querySelector(".message-body-content");
                        if (n) {
                            n.innerHTML = e;
                            var r = document.querySelector(".message-body-dismiss");
                            if (r) {
                                var o = function() { t.classList.add("invisible"), t.addEventListener("transitionend", function() { t.classList.add("hidden"), t.classList.remove("invisible") }), r.removeEventListener("click", o) };
                                r.addEventListener("click", o)
                            }
                        }
                    }
                }, e.drawCircle = function(e, t) { //fills in a spot with the appropriate player's piece color
                    var n = t.x,
                        r = void 0 === n ? 0 : n,
                        o = t.y,
                        i = void 0 === o ? 0 : o,
                        a = t.r,
                        s = void 0 === a ? 0 : a,
                        c = t.fillStyle,
                        u = void 0 === c ? "" : c,
                        l = t.strokeStyle,
                        f = void 0 === l ? "" : l;
                    e.save(), e.fillStyle = u, e.strokeStyle = f, e.beginPath(), e.arc(r, i, s, 0, 2 * Math.PI, !1), e.fill(), e.restore()
                }, e.drawMask = function(e) {
                    var t = e.context;
                    t.save(), t.fillStyle = r.Board.MASK_COLOR, t.beginPath();
                    for (var n = 2 * r.Board.PIECE_RADIUS, o = 3 * r.Board.PIECE_RADIUS, i = 0; i < r.Board.ROWS; i++)
                        for (var a = 0; a < r.Board.COLUMNS; a++) t.arc(o * a + r.Board.MASK_X_BEGIN + n, o * i + r.Board.MASK_Y_BEGIN + n, r.Board.PIECE_RADIUS, 0, 2 * Math.PI), t.rect(o * a + r.Board.MASK_X_BEGIN + 2 * n, o * i + r.Board.MASK_Y_BEGIN, -2 * n, 2 * n);
                    t.fill(), t.restore()
                }, e.clearCanvas = function(e) { //resets the board
                    e.context.clearRect(0, 0, e.canvas.width, e.canvas.height)
                }, e.isCoordOnColumn = function(e, t, n) { return (e.x - t) * (e.x - t) <= n * n }, e.getColumnFromCoord = function(t) {
                    for (var n = 0; n < r.Board.COLUMNS; n++)
                        if (e.isCoordOnColumn(t, 3 * r.Board.PIECE_RADIUS * n + r.Board.MASK_X_BEGIN + 2 * r.Board.PIECE_RADIUS, r.Board.PIECE_RADIUS)) return n;
                    return -1
                }, e.getRandomColumnNumber = function() { return Math.floor(Math.random() * r.Board.COLUMNS) }, e.choose = function(e) { return e[Math.floor(Math.random() * e.length)] }, e.animationFrame = function() {
                    var e = null,
                        t = new Promise(function(t) { return e = t });
                    return e && window.requestAnimationFrame(e), t
                }, e.clone = function(e) { for (var t = [], n = 0; n < e.length; n++) t[n] = e[n].slice(); return t }, e.getMockPlayerAction = function(t, n, o) {
                    var i = e.clone(t);
                    if (i[0][o] !== r.BoardPiece.EMPTY || o < 0 || o >= r.Board.COLUMNS) return { success: !1, map: i };
                    for (var a = !1, s = 0, c = 0; c < r.Board.ROWS - 1; c++)
                        if (i[c + 1][o] !== r.BoardPiece.EMPTY) { a = !0, s = c; break }
                    return a || (s = r.Board.ROWS - 1), i[s][o] = n, { success: !0, map: i }
                }, e.onresize = function() {
                    function e() { o || (o = !0, window.requestAnimationFrame ? window.requestAnimationFrame(t) : setTimeout(t, 66)) }

                    function t() { r.forEach(function(e) { e() }), o = !1 }

                    function n(e) { e && r.push(e) }
                    var r = [],
                        o = !1;
                    return { add: function(t) { r.length || window.addEventListener("resize", e), n(t) } }
                }, e.BIG_POSITIVE_NUMBER = Math.pow(10, 9) + 7, e.BIG_NEGATIVE_NUMBER = -e.BIG_POSITIVE_NUMBER, e
            }();
        n.Utils = o
    }, { "./board": 3 }],

    16: [function(e, t, n) { //If someone is using an older browser, polyfiil allows this to work...
        t.exports = e("./").polyfill()
    }, { "./": 17 }],

    17: [function(e, t, n) { //And this is what allows it to work on all browsers
        (function(r, o) {
            ! function(e, r) { "object" == typeof n && void 0 !== t ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : e.ES6Promise = r() }(this, function() {
                function t(e) { var t = typeof e; return null !== e && ("object" === t || "function" === t) }

                function n(e) { return "function" == typeof e }

                function i() { return void 0 !== N ? function() { N(s) } : a() }

                function a() { var e = setTimeout; return function() { return e(s, 1) } }

                function s() {
                    for (var e = 0; e < G; e += 2)(0, H[e])(H[e + 1]), H[e] = void 0, H[e + 1] = void 0;
                    G = 0
                }

                function c(e, t) {
                    var n = arguments,
                        r = this,
                        o = new this.constructor(l);
                    void 0 === o[X] && C(o);
                    var i = r._state;
                    return i ? function() {
                        var e = n[i - 1];
                        W(function() { return M(i, o, e, r._result) })
                    }() : g(r, o, e, t), o
                }

                function u(e) { var t = this; if (e && "object" == typeof e && e.constructor === t) return e; var n = new t(l); return _(n, e), n }

                function l() {}

                function p(e) { try { return e.then } catch (e) { return Z.error = e, Z } }

                function d(e, t, n, r) { try { e.call(t, n, r) } catch (e) { return e } }

                function y(e, t, n) {
                    W(function(e) {
                        var r = !1,
                            o = d(n, t, function(n) { r || (r = !0, t !== n ? _(e, n) : m(e, n)) }, function(t) { r || (r = !0, P(e, t)) }, "Settle: " + (e._label || " unknown promise"));
                        !r && o && (r = !0, P(e, o))
                    }, e)
                }

                function S() { this.error = null }

                function A(e, t) { try { return e(t) } catch (e) { return $.error = e, $ } }

                function O(e, t) { try { t(function(t) { _(e, t) }, function(t) { P(e, t) }) } catch (t) { P(e, t) } }

                function B() { return ee++ }

                function C(e) { e[X] = ee++, e._state = void 0, e._result = void 0, e._subscribers = [] }

                function I(e, t) { this._instanceConstructor = e, this.promise = new e(l), this.promise[X] || C(this.promise), T(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? m(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && m(this.promise, this._result))) : P(this.promise, R()) }

                function L(e) { this[X] = B(), this._result = this._state = void 0, this._subscribers = [], l !== e && ("function" != typeof e && k(), this instanceof L ? O(this, e) : x()) }
                var U = void 0,
                    T = U = Array.isArray ? Array.isArray : function(e) { return "[object Array]" === Object.prototype.toString.call(e) },
                    G = 0,
                    N = void 0,
                    Y = void 0,
                    W = function(e, t) { H[G] = e, H[G + 1] = t, 2 === (G += 2) && (Y ? Y(s) : K()) },
                    j = "undefined" != typeof window ? window : void 0,
                    D = j || {},
                    F = D.MutationObserver || D.WebKitMutationObserver,
                    V = "undefined" == typeof self && void 0 !== r && "[object process]" === {}.toString.call(r),
                    q = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    H = new Array(1e3),
                    K = void 0;
                K = V ? function() { return r.nextTick(s) } : F ? function() {
                    var e = 0,
                        t = new F(s),
                        n = document.createTextNode("");
                    return t.observe(n, { characterData: !0 }),
                        function() { n.data = e = ++e % 2 }
                }() : q ? function() {
                    var e = new MessageChannel;
                    return e.port1.onmessage = s,
                        function() { return e.port2.postMessage(0) }
                }() : void 0 === j && "function" == typeof e ? function() { try { var t = e("vertx"); return N = t.runOnLoop || t.runOnContext, i() } catch (e) { return a() } }() : a();
                var X = Math.random().toString(36).substring(16),
                    z = void 0,
                    J = 1,
                    Q = 2,
                    Z = new S,
                    $ = new S,
                    ee = 0;
                return I.prototype._enumerate = function(e) { for (var t = 0; this._state === z && t < e.length; t++) this._eachEntry(e[t], t) }, I.prototype._eachEntry = function(e, t) {
                    var n = this._instanceConstructor,
                        r = n.resolve;
                    if (r === u) {
                        var o = p(e);
                        if (o === c && e._state !== z) this._settledAt(e._state, t, e._result);
                        else if ("function" != typeof o) this._remaining--, this._result[t] = e;
                        else if (n === L) {
                            var i = new n(l);
                            b(i, e, o), this._willSettleAt(i, t)
                        } else this._willSettleAt(new n(function(t) { return t(e) }), t)
                    } else this._willSettleAt(r(e), t)
                }, I.prototype._settledAt = function(e, t, n) {
                    var r = this.promise;
                    r._state === z && (this._remaining--, e === Q ? P(r, n) : this._result[t] = n), 0 === this._remaining && m(r, this._result)
                }, I.prototype._willSettleAt = function(e, t) {
                    var n = this;
                    g(e, void 0, function(e) { return n._settledAt(J, t, e) }, function(e) { return n._settledAt(Q, t, e) })
                }, L.all = function(e) { return new I(this, e).promise }, L.race = function(e) { var t = this; return new t(T(e) ? function(n, r) { for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r) } : function(e, t) { return t(new TypeError("You must pass an array to race.")) }) }, L.resolve = u, L.reject = function(e) { var t = new this(l); return P(t, e), t }, L._setScheduler = function(e) { Y = e }, L._setAsap = function(e) { W = e }, L._asap = W, L.prototype = { constructor: L, then: c, catch: function(e) { return this.then(null, e) } }, L.polyfill = function() {
                    var e = void 0;
                    if (void 0 !== o) e = o;
                    else if ("undefined" != typeof self) e = self;
                    else try { e = Function("return this")() } catch (e) {}
                    var t = e.Promise;
                    if (t) { var n = null; try { n = Object.prototype.toString.call(t.resolve()) } catch (e) {} if ("[object Promise]" === n && !t.cast) return }
                    e.Promise = L
                }, L.Promise = L, L
            })
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, { _process: 1 }]
}, {}, [2]);