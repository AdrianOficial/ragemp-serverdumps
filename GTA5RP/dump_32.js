{
    const mp = global.mp,
        localPlayer = mp.players.local,
        controls = mp.game.controls,
        handItemOnSet = new Map,
        handItemOnRemove = new Map,
        handItemPlayerOffers = new Map,
        handItemKeyBinder = new Map;
    global.itemInHand_FLAG = {
        NONE: 0,
        PLAYER: 1,
        VEHICLE: 2
    }, global.itemInHand = null;
    let isEventActive = !1;
    mp.events.add("client_itemInHand_set", function (a, b, c) {
        -1569615261 != mp.game.invoke("0x0A6DB4965674D243", localPlayer.handle) && mp.game.invoke("0xADF692B254977C0C", localPlayer.handle, -1569615261, !0), removeItemHand(), global.itemInHand = {
            itemId: a,
            useFlag: b,
            canFall: c,
            offersToPlayer: handItemPlayerOffers.get(a) || []
        };
        const d = handItemOnSet.get(global.itemInHand.itemId);
        d && d();
        const e = handItemKeyBinder.get(global.itemInHand.itemId);
        e && (mp.keys.bind(e[0], !0, e[3]), global.notifyKeyHelpShow(e[1], e[2])), global.mainBrowser.execute(`mainHud.isHasItemInHand = true;`), isEventActive || (mp.events.add("render", renderEvent), isEventActive = !0)
    }), mp.events.add("client_itemInHand_remove", function () {
        removeItemHand(), global.itemInHand = null, global.mainBrowser.execute(`mainHud.isHasItemInHand = false;`), isEventActive && (mp.events.remove("render", renderEvent), isEventActive = !1)
    });
    const removeItemHand = () => {
            if (global.itemInHand) {
                const a = handItemOnRemove.get(global.itemInHand.itemId);
                a && a();
                const b = handItemKeyBinder.get(global.itemInHand.itemId);
                b && (mp.keys.unbind(b[0], !0, b[3]), global.notifyKeyHelpHide())
            }
        },
        taskFallItemHand = () => {
            mp.events.callRemote("server_playerHandItem_fall"), mp.events.call("client_itemInHand_remove")
        },
        renderEvent = () => {
            null != global.itemInHand && global.itemInHand.canFall && (controls.disableControlAction(0, 21, !0), controls.disableControlAction(0, 22, !0), controls.disableControlAction(0, 23, !0), controls.disableControlAction(0, 24, !0), controls.disableControlAction(0, 25, !0), (null != localPlayer.vehicle || global.isPlayerDeath || localPlayer.isRagdoll() || localPlayer.isFalling() || localPlayer.isJumping() || localPlayer.isSwimming() || -1569615261 != mp.game.invoke("0x0A6DB4965674D243", localPlayer.handle)) && taskFallItemHand())
        };
    mp.keys.bind(40, !0, function () {
        mp.gui.cursor.visible || global.isChatOpen || global.disableKeys || null == global.itemInHand || localPlayer.isRagdoll() || (mp.events.callRemote("server_playerHandItem_put"), mp.events.call("client_itemInHand_remove"))
    });
    const handItemEventOnSet = global.handItemEventOnSet = (a, b) => {
            handItemOnSet.set(a, b)
        },
        handItemEventOnRemove = global.handItemEventOnRemove = (a, b) => {
            handItemOnRemove.set(a, b)
        },
        handItemSetPlayerOffers = global.handItemSetPlayerOffers = (a, b) => {
            handItemPlayerOffers.set(a, b)
        },
        handItemBindKey = global.handItemBindKey = (a, b, c, d, e) => {
            handItemKeyBinder.set(a, [b, c, d, e])
        },
        handItemIsInHand = global.handItemIsInHand = a => global.itemInHand && global.itemInHand.itemId === a;
    global.handItemTaskFall = taskFallItemHand, (() => {
        var a = `*
        * ----------------------------------------------------------------------------
        * "THE BEER-WARE LICENSE" (Revision 42):
        * <contact@adastragaming.fr> wrote this file. As long as you retain this notice you
        * can do whatever you want with this stuff. If we meet some day, and you think
        * this stuff is worth it, you can buy me a beer in return AdAstra Gaming
        * ----------------------------------------------------------------------------
    *`;
        const b = 70,
            c = 5,
            d = 10;
        var e = null,
            f = null,
            g = .5 * (70 + c),
            h = 0,
            i = !1;
        handItemEventOnSet("HI_BINOCULAR", () => {
            i = !1, f || (f = new global.Scaleform("BINOCULARS"), f.callFunction("SET_CAM_LOGO", 0)), mp.events.add("render", j), a += "*"
        }), handItemEventOnRemove("HI_BINOCULAR", () => {
            mp.events.remove("render", j), i && (global.hideUI(!1), e && (mp.game.cam.renderScriptCams(!1, !1, 0, !0, !1), e.destroy(), e = null, localPlayer.isActiveInScenario() && localPlayer.clearTasks()), i = !1)
        });
        const j = () => {
            var a = Math.max,
                j = Math.min;
            if (i ? !mp.keys.isDown(2) && (i = !1, global.hideUI(!1), e && (mp.game.cam.renderScriptCams(!1, !1, 0, !0, !1), e.destroy(), e = null, localPlayer.stopAnimTask("amb@lo_res_idles@", "world_human_binoculars_lo_res_base", 3))) : mp.keys.isDown(2) && 0 === global.getPlayerCurrentWeaponData().weapon && (i = !0, global.hideUI(!0), !e && (e = mp.cameras.new("DEFAULT_SCRIPTED_FLY_CAMERA", localPlayer.position, new mp.Vector3(0, 0, 0), g), e.attachTo(localPlayer.handle, 0, .35, .78, !0), e.setRot(0, 0, localPlayer.getHeading(), 2), e.setFov(g), mp.game.cam.renderScriptCams(!0, !1, 0, !0, !1)), localPlayer.taskPlayAnim("amb@lo_res_idles@", "world_human_binoculars_lo_res_base", 1, 0, -1, 49, 1, !1, !1, !1)), !i || localPlayer.vehicle || 0 !== global.getPlayerCurrentWeaponData().weapon) return;
            const k = new Date().getTime();
            h + 500 < k && (h = k, mp.events.callRemote("server_binocular_sync"));
            const l = 1 / (b - c) * (g - c),
                m = mp.game.controls.getDisabledControlNormal(0, 220),
                n = mp.game.controls.getDisabledControlNormal(0, 221),
                o = e.getRot(2);
            (0 != m || 0 != n) && (e.setRot(a(j(20, o.x + -1 * n * 8 * (l + .1)), -89.5), 0, o.z + -1 * m * 8 * (l + .1), 2), localPlayer.setHeading(e.getRot(2).z)), mp.game.controls.isControlJustPressed(0, 241) && (g = a(g - d, c)), mp.game.controls.isControlJustPressed(0, 242) && (g = j(g + d, b));
            const p = e.getFov();
            .1 > Math.abs(g - p) && (g = p), e.setFov(p + .05 * (g - p));
            for (let a = 1; 22 >= a; a++) mp.game.ui.hideHudComponentThisFrame(a);
            f.render2D()
        };
        mp.events.add("binocular.sync", async a => {
            const b = mp.players.atRemoteId(a);
            b && 0 !== b.handle && (b.binocularSyncLast = new Date().getTime(), !b.binocularSyncTimer && (mp.attachmentMngr.addClient(b, mp.game.joaat("binocAnim")), mp.attachmentMngr.removeFor(b, mp.game.joaat("binoc")), b.taskPlayAnim("amb@lo_res_idles@", "world_human_binoculars_lo_res_base", 1, 0, -1, 49, 1, !1, !1, !1), b.binocularSyncTimer = setInterval(() => {
                if (!mp.players.exists(b) || 0 === b.handle || 1e3 < new Date().getTime() - b.binocularSyncLast) return mp.players.exists(b) && 0 !== b.handle && (b.stopAnimTask("amb@lo_res_idles@", "world_human_binoculars_lo_res_base", 3), mp.attachmentMngr.addClient(b, mp.game.joaat("binoc")), mp.attachmentMngr.removeFor(b, mp.game.joaat("binocAnim"))), clearInterval(b.binocularSyncTimer), void delete b.binocularSyncTimer
            }, 100)))
        }), mp.attachmentMngr.register("binoc", "prop_binoc_01", 58866, new mp.Vector3(.14, -.02, 0), new mp.Vector3(35, 0, 0)), mp.attachmentMngr.register("binocAnim", "prop_binoc_01", 28422, new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0))
    })(), (() => {
        handItemSetPlayerOffers("I_FL_1", [
            ["\u041F\u043E\u0434\u0430\u0440\u0438\u0442\u044C \u0446\u0432\u0435\u0442\u044B", "gift.svg", "s_player_giveFlowers"]
        ]), handItemSetPlayerOffers("I_FL_2", [
            ["\u041F\u043E\u0434\u0430\u0440\u0438\u0442\u044C \u0446\u0432\u0435\u0442\u044B", "gift.svg", "s_player_giveFlowers"]
        ]), handItemSetPlayerOffers("I_FL_3", [
            ["\u041F\u043E\u0434\u0430\u0440\u0438\u0442\u044C \u0446\u0432\u0435\u0442\u044B", "gift.svg", "s_player_giveFlowers"]
        ]), handItemSetPlayerOffers("I_FL_4", [
            ["\u041F\u043E\u0434\u0430\u0440\u0438\u0442\u044C \u0446\u0432\u0435\u0442\u044B", "gift.svg", "s_player_giveFlowers"]
        ]), handItemSetPlayerOffers("I_FL_5", [
            ["\u041F\u043E\u0434\u0430\u0440\u0438\u0442\u044C \u0446\u0432\u0435\u0442\u044B", "gift.svg", "s_player_giveFlowers"]
        ])
    })(), (() => {
        handItemSetPlayerOffers("HI_NY_GIFT", [
            ["\u041F\u043E\u0434\u0430\u0440\u0438\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043E\u043A", "gift.svg", "s_player_giveNewYearGift"]
        ])
    })(), (() => {
        handItemBindKey("PRISON_FOOD_TRAY", 69, "E", "\u0435\u0441\u0442\u044C", () => {
            global.actionAntiFlood("server_prison_foodTrayEat", 1500) && mp.events.callRemote("server_prison_foodTrayEat")
        })
    })(), (() => {
        handItemEventOnSet("HI_TOY_HORSE", () => {
            global.additionalScenarioList.set("\u0414\u043E\u0441\u0442\u0430\u0442\u044C \u043A\u043E\u043D\u044F", "toyHorse_s"), global.additionalScenarioList.set("\u0415\u0445\u0430\u0442\u044C \u043D\u0430 \u043A\u043E\u043D\u0435", "toyHorse_a1"), global.additionalScenarioList.set("\u0422\u0430\u043D\u0435\u0446 \u0441 \u043A\u043E\u043D\u0435\u043C \u21161", "toyHorse_a2"), global.additionalScenarioList.set("\u0422\u0430\u043D\u0435\u0446 \u0441 \u043A\u043E\u043D\u0435\u043C \u21162", "toyHorse_a3")
        }), handItemEventOnRemove("HI_TOY_HORSE", () => {
            global.additionalScenarioList.delete("\u0414\u043E\u0441\u0442\u0430\u0442\u044C \u043A\u043E\u043D\u044F"), global.additionalScenarioList.delete("\u0415\u0445\u0430\u0442\u044C \u043D\u0430 \u043A\u043E\u043D\u0435"), global.additionalScenarioList.delete("\u0422\u0430\u043D\u0435\u0446 \u0441 \u043A\u043E\u043D\u0435\u043C \u21161"), global.additionalScenarioList.delete("\u0422\u0430\u043D\u0435\u0446 \u0441 \u043A\u043E\u043D\u0435\u043C \u21162")
        }), new global.CustomScenarioAnimWithItem("toyHorse_s", "itemToyHorse_s", "", "", 1), mp.attachmentMngr.register("itemToyHorse_s", "ba_prop_battle_hobby_horse", 28422, new mp.Vector3(.06, 0, -.02), new mp.Vector3(-75, 10, 0)), new global.CustomScenarioAnimWithItem("toyHorse_a1", "itemToyHorse_a", "anim@amb@nightclub@lazlow@hi_dancefloor@", "dancecrowd_li_15_handup_laz", 49), new global.CustomScenarioAnimWithItem("toyHorse_a2", "itemToyHorse_a", "anim@amb@nightclub@lazlow@hi_dancefloor@", "crowddance_hi_11_handup_laz", 1), new global.CustomScenarioAnimWithItem("toyHorse_a3", "itemToyHorse_a", "anim@amb@nightclub@lazlow@hi_dancefloor@", "dancecrowd_li_11_hu_shimmy_laz", 1), mp.attachmentMngr.register("itemToyHorse_a", "ba_prop_battle_hobby_horse", 28422, new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0)), handItemEventOnSet("HI_TOY_GIRA", () => {
            global.additionalScenarioList.set("\u0414\u043E\u0441\u0442\u0430\u0442\u044C \u0436\u0438\u0440\u0430\u0444\u0430", "toyGira_s"), global.additionalScenarioList.set("\u0415\u0445\u0430\u0442\u044C \u043D\u0430 \u0436\u0438\u0440\u0430\u0444\u0435", "toyGira_a1"), global.additionalScenarioList.set("\u0422\u0430\u043D\u0435\u0446 \u0441 \u0436\u0438\u0440\u0430\u0444\u043E\u043C \u21161", "toyGira_a2"), global.additionalScenarioList.set("\u0422\u0430\u043D\u0435\u0446 \u0441 \u0436\u0438\u0440\u0430\u0444\u043E\u043C \u21162", "toyGira_a3")
        }), handItemEventOnRemove("HI_TOY_GIRA", () => {
            global.additionalScenarioList.delete("\u0414\u043E\u0441\u0442\u0430\u0442\u044C \u0436\u0438\u0440\u0430\u0444\u0430"), global.additionalScenarioList.delete("\u0415\u0445\u0430\u0442\u044C \u043D\u0430 \u0436\u0438\u0440\u0430\u0444\u0435"), global.additionalScenarioList.delete("\u0422\u0430\u043D\u0435\u0446 \u0441 \u0436\u0438\u0440\u0430\u0444\u043E\u043C \u21161"), global.additionalScenarioList.delete("\u0422\u0430\u043D\u0435\u0446 \u0441 \u0436\u0438\u0440\u0430\u0444\u043E\u043C \u21162")
        }), new global.CustomScenarioAnimWithItem("toyGira_s", "itemtoyGira_s", "", "", 1), mp.attachmentMngr.register("itemtoyGira_s", "dge_nag_ng_animal_gira", 28422, new mp.Vector3(.06, 0, -.02), new mp.Vector3(-75, 10, 0)), new global.CustomScenarioAnimWithItem("toyGira_a1", "itemtoyGira_a", "anim@amb@nightclub@lazlow@hi_dancefloor@", "dancecrowd_li_15_handup_laz", 49), new global.CustomScenarioAnimWithItem("toyGira_a2", "itemtoyGira_a", "anim@amb@nightclub@lazlow@hi_dancefloor@", "crowddance_hi_11_handup_laz", 1), new global.CustomScenarioAnimWithItem("toyGira_a3", "itemtoyGira_a", "anim@amb@nightclub@lazlow@hi_dancefloor@", "dancecrowd_li_11_hu_shimmy_laz", 1), mp.attachmentMngr.register("itemtoyGira_a", "dge_nag_ng_animal_gira", 28422, new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0)), handItemEventOnSet("HI_TOY_ZEBB", () => {
            global.additionalScenarioList.set("\u0414\u043E\u0441\u0442\u0430\u0442\u044C \u0437\u0435\u0431\u0440\u0443", "toyZebb_s"), global.additionalScenarioList.set("\u0415\u0445\u0430\u0442\u044C \u043D\u0430 \u0437\u0435\u0431\u0440\u0435", "toyZebb_a1"), global.additionalScenarioList.set("\u0422\u0430\u043D\u0435\u0446 \u0441 \u0437\u0435\u0431\u0440\u043E\u0439 \u21161", "toyZebb_a2"), global.additionalScenarioList.set("\u0422\u0430\u043D\u0435\u0446 \u0441 \u0437\u0435\u0431\u0440\u043E\u0439 \u21162", "toyZebb_a3")
        }), handItemEventOnRemove("HI_TOY_ZEBB", () => {
            global.additionalScenarioList.delete("\u0414\u043E\u0441\u0442\u0430\u0442\u044C \u0437\u0435\u0431\u0440\u0443"), global.additionalScenarioList.delete("\u0415\u0445\u0430\u0442\u044C \u043D\u0430 \u0437\u0435\u0431\u0440\u0435"), global.additionalScenarioList.delete("\u0422\u0430\u043D\u0435\u0446 \u0441 \u0437\u0435\u0431\u0440\u043E\u0439 \u21161"), global.additionalScenarioList.delete("\u0422\u0430\u043D\u0435\u0446 \u0441 \u0437\u0435\u0431\u0440\u043E\u0439 \u21162")
        }), new global.CustomScenarioAnimWithItem("toyZebb_s", "itemtoyZebb_s", "", "", 1), mp.attachmentMngr.register("itemtoyZebb_s", "dge_nag_ng_animal_zebb", 28422, new mp.Vector3(.06, 0, -.02), new mp.Vector3(-75, 10, 0)), new global.CustomScenarioAnimWithItem("toyZebb_a1", "itemtoyZebb_a", "anim@amb@nightclub@lazlow@hi_dancefloor@", "dancecrowd_li_15_handup_laz", 49), new global.CustomScenarioAnimWithItem("toyZebb_a2", "itemtoyZebb_a", "anim@amb@nightclub@lazlow@hi_dancefloor@", "crowddance_hi_11_handup_laz", 1), new global.CustomScenarioAnimWithItem("toyZebb_a3", "itemtoyZebb_a", "anim@amb@nightclub@lazlow@hi_dancefloor@", "dancecrowd_li_11_hu_shimmy_laz", 1), mp.attachmentMngr.register("itemtoyZebb_a", "dge_nag_ng_animal_zebb", 28422, new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0)), handItemEventOnSet("HI_TOY_L_STICK", () => {
            global.mainMenuItems.set("\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0446\u0432\u0435\u0442 \u0441\u0442\u0438\u043A\u043E\u0432", () => {
                global.createMenuList({
                    toPlayer: "auto",
                    items: ["\u041E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439", "\u0421\u0438\u043D\u0438\u0439", "\u0417\u0435\u043B\u0435\u043D\u044B\u0439", "\u0417\u043E\u043B\u043E\u0442\u043E\u0439", "\u0420\u043E\u0437\u043E\u0432\u044B\u0439", "\u041B\u0438\u043B\u043E\u0432\u044B\u0439", "\u041A\u0440\u0430\u0441\u043D\u044B\u0439", "\u0411\u0435\u043B\u044B\u0439", "\u0416\u0435\u043B\u0442\u044B\u0439"].map((a, b) => [a, () => {
                        global.hideMenuList(), mp.events.callRemote("server_toyLightingStick_set", b)
                    }])
                })
            }), global.additionalScenarioList.set("\u0422\u0430\u043D\u0435\u0446 \u0441\u043E \u0441\u0442\u0438\u043A\u0430\u043C\u0438 \u21161", "toyLStick_a1"), global.additionalScenarioList.set("\u0422\u0430\u043D\u0435\u0446 \u0441\u043E \u0441\u0442\u0438\u043A\u0430\u043C\u0438 \u21162", "toyLStick_a2"), global.additionalScenarioList.set("\u0422\u0430\u043D\u0435\u0446 \u0441\u043E \u0441\u0442\u0438\u043A\u0430\u043C\u0438 \u21163", "toyLStick_a3")
        }), handItemEventOnRemove("HI_TOY_L_STICK", () => {
            global.mainMenuItems.delete("\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0446\u0432\u0435\u0442 \u0441\u0442\u0438\u043A\u043E\u0432"), global.additionalScenarioList.delete("\u0422\u0430\u043D\u0435\u0446 \u0441\u043E \u0441\u0442\u0438\u043A\u0430\u043C\u0438 \u21161", "toyLStick_a1"), global.additionalScenarioList.delete("\u0422\u0430\u043D\u0435\u0446 \u0441\u043E \u0441\u0442\u0438\u043A\u0430\u043C\u0438 \u21162", "toyLStick_a2"), global.additionalScenarioList.delete("\u0422\u0430\u043D\u0435\u0446 \u0441\u043E \u0441\u0442\u0438\u043A\u0430\u043C\u0438 \u21163", "toyLStick_a3")
        }), new global.CustomScenarioAnimWithItem("toyLStick_a1", [], "anim@amb@nightclub@lazlow@hi_railing@", "ambclub_13_mi_hi_sexualgriding_laz", 1), new global.CustomScenarioAnimWithItem("toyLStick_a2", [], "anim@amb@nightclub@lazlow@hi_railing@", "ambclub_12_mi_hi_bootyshake_laz", 1), new global.CustomScenarioAnimWithItem("toyLStick_a3", [], "anim@amb@nightclub@lazlow@hi_railing@", "ambclub_09_mi_hi_bellydancer_laz", 1), mp.attachmentMngr.register("itemToyLStick_0_1", "ba_prop_battle_glowstick_01", 28422, new mp.Vector3(.1, .14, 0), new mp.Vector3(-80, 20, 0)), mp.attachmentMngr.register("itemToyLStick_0_2", "ba_prop_battle_glowstick_01", 60309, new mp.Vector3(.07, .08, 0), new mp.Vector3(-120, 0, -20)), mp.attachmentMngr.register("itemToyLStick_1_1", "gta5rp_glowstick_blue", 28422, new mp.Vector3(.1, .14, 0), new mp.Vector3(-80, 20, 0)), mp.attachmentMngr.register("itemToyLStick_1_2", "gta5rp_glowstick_blue", 60309, new mp.Vector3(.07, .08, 0), new mp.Vector3(-120, 0, -20)), mp.attachmentMngr.register("itemToyLStick_2_1", "gta5rp_glowstick_green", 28422, new mp.Vector3(.1, .14, 0), new mp.Vector3(-80, 20, 0)), mp.attachmentMngr.register("itemToyLStick_2_2", "gta5rp_glowstick_green", 60309, new mp.Vector3(.07, .08, 0), new mp.Vector3(-120, 0, -20)), mp.attachmentMngr.register("itemToyLStick_3_1", "gta5rp_glowstick_orange", 28422, new mp.Vector3(.1, .14, 0), new mp.Vector3(-80, 20, 0)), mp.attachmentMngr.register("itemToyLStick_3_2", "gta5rp_glowstick_orange", 60309, new mp.Vector3(.07, .08, 0), new mp.Vector3(-120, 0, -20)), mp.attachmentMngr.register("itemToyLStick_4_1", "gta5rp_glowstick_pink", 28422, new mp.Vector3(.1, .14, 0), new mp.Vector3(-80, 20, 0)), mp.attachmentMngr.register("itemToyLStick_4_2", "gta5rp_glowstick_pink", 60309, new mp.Vector3(.07, .08, 0), new mp.Vector3(-120, 0, -20)), mp.attachmentMngr.register("itemToyLStick_5_1", "gta5rp_glowstick_purple", 28422, new mp.Vector3(.1, .14, 0), new mp.Vector3(-80, 20, 0)), mp.attachmentMngr.register("itemToyLStick_5_2", "gta5rp_glowstick_purple", 60309, new mp.Vector3(.07, .08, 0), new mp.Vector3(-120, 0, -20)), mp.attachmentMngr.register("itemToyLStick_6_1", "gta5rp_glowstick_red", 28422, new mp.Vector3(.1, .14, 0), new mp.Vector3(-80, 20, 0)), mp.attachmentMngr.register("itemToyLStick_6_2", "gta5rp_glowstick_red", 60309, new mp.Vector3(.07, .08, 0), new mp.Vector3(-120, 0, -20)), mp.attachmentMngr.register("itemToyLStick_7_1", "gta5rp_glowstick_white", 28422, new mp.Vector3(.1, .14, 0), new mp.Vector3(-80, 20, 0)), mp.attachmentMngr.register("itemToyLStick_7_2", "gta5rp_glowstick_white", 60309, new mp.Vector3(.07, .08, 0), new mp.Vector3(-120, 0, -20)), mp.attachmentMngr.register("itemToyLStick_8_1", "gta5rp_glowstick_yellow", 28422, new mp.Vector3(.1, .14, 0), new mp.Vector3(-80, 20, 0)), mp.attachmentMngr.register("itemToyLStick_8_2", "gta5rp_glowstick_yellow", 60309, new mp.Vector3(.07, .08, 0), new mp.Vector3(-120, 0, -20));
        const a = (a, b, c) => {
            handItemEventOnSet(`HI_${a}`, () => {
                global.mainMenuItems.set("\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0446\u0432\u0435\u0442 \u0441\u0442\u0438\u043A\u043E\u0432", () => {
                    global.createMenuList({
                        toPlayer: "auto",
                        items: ["\u0421\u0438\u043D\u0438\u0439", "\u0417\u0435\u043B\u0435\u043D\u044B\u0439", "\u0417\u043E\u043B\u043E\u0442\u043E\u0439", "\u0420\u043E\u0437\u043E\u0432\u044B\u0439", "\u041B\u0438\u043B\u043E\u0432\u044B\u0439", "\u041A\u0440\u0430\u0441\u043D\u044B\u0439", "\u0411\u0435\u043B\u044B\u0439", "\u0416\u0435\u043B\u0442\u044B\u0439"].map((a, c) => [a, () => {
                            global.hideMenuList(), mp.events.callRemote("server_toyNeonStick_set", b, c)
                        }])
                    })
                }), global.additionalScenarioList.set("\u0422\u0430\u043D\u0435\u0446 \u0441\u043E \u0441\u0442\u0438\u043A\u0430\u043C\u0438 \u21161", "toyLStick_a1"), global.additionalScenarioList.set("\u0422\u0430\u043D\u0435\u0446 \u0441\u043E \u0441\u0442\u0438\u043A\u0430\u043C\u0438 \u21162", "toyLStick_a2"), global.additionalScenarioList.set("\u0422\u0430\u043D\u0435\u0446 \u0441\u043E \u0441\u0442\u0438\u043A\u0430\u043C\u0438 \u21163", "toyLStick_a3")
            }), handItemEventOnRemove(`HI_${a}`, () => {
                global.mainMenuItems.delete("\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0446\u0432\u0435\u0442 \u0441\u0442\u0438\u043A\u043E\u0432"), global.additionalScenarioList.delete("\u0422\u0430\u043D\u0435\u0446 \u0441\u043E \u0441\u0442\u0438\u043A\u0430\u043C\u0438 \u21161", "toyLStick_a1"), global.additionalScenarioList.delete("\u0422\u0430\u043D\u0435\u0446 \u0441\u043E \u0441\u0442\u0438\u043A\u0430\u043C\u0438 \u21162", "toyLStick_a2"), global.additionalScenarioList.delete("\u0422\u0430\u043D\u0435\u0446 \u0441\u043E \u0441\u0442\u0438\u043A\u0430\u043C\u0438 \u21163", "toyLStick_a3")
            });
            const d = ["blue", "green", "orange", "pink", "purple", "red", "white", "yellow"];
            for (let e = 0; e < d.length; e++) {
                const a = d[e];
                mp.attachmentMngr.register(`itemToy${b}_${e}_1`, `${c}${a}`, 28422, new mp.Vector3(.1, .14, 0), new mp.Vector3(-80, 20, 0)), mp.attachmentMngr.register(`itemToy${b}_${e}_2`, `${c}${a}`, 60309, new mp.Vector3(.07, .08, 0), new mp.Vector3(-120, 0, -20))
            }
        };
        a("TOY_N_COOL", "NCool", "dge_nag_ng_neon_cool_"), a("TOY_N_CROWN", "NCrown", "dge_nag_ng_neon_crown_"), a("TOY_N_HAND", "NHand", "dge_nag_ng_neon_hand_"), a("TOY_N_HEART", "NHeart", "dge_nag_ng_neon_heart_"), a("TOY_N_ROCK", "NRock", "dge_nag_ng_neon_rock_"), a("TOY_N_STAR", "NStar", "dge_nag_ng_neon_star_")
    })(), (() => {
        handItemSetPlayerOffers("HI_HANDSHAKE_SHOKER", [
            ["\u0423\u0434\u0430\u0440\u0438\u0442\u044C \u0442\u043E\u043A\u043E\u043C", "electric-handshake.svg", "s_player_handShakeShoker"]
        ])
    })(), (() => {
        let a = new mp.Vector3(0, 0, 0),
            b = 0,
            c = 0,
            d = [];
        handItemEventOnSet("METALDETECTOR", () => {
            a = null, b = 0, mp.events.add("render", s)
        }), handItemEventOnRemove("METALDETECTOR", () => {
            mp.events.remove("render", s)
        });
        const e = {
                NONE: 0,
                SLOW: 1,
                MEDIUM: 2,
                FAST: 3,
                ULTRA: 4
            },
            f = 1.25;
        let g = 0,
            h = 0,
            i = e.NONE,
            j = 0,
            k = 255,
            l = 255,
            m = 255,
            n = 255,
            o = 150,
            p = 255,
            q = 150,
            r = 0;
        const s = () => {
            if (localPlayer.isAttached() || localPlayer.isOnVehicle()) return void taskFallItemHand();
            const d = t();
            if (null === a) return void(c + 1e4 < d && (c = d, mp.events.callRemote("server_metalDetector_find")));
            const {
                x: s,
                y: u,
                z: v
            } = localPlayer.position, w = mp.dist(s, u, 0, a.x, a.y, 0);
            w > b && c + 15e3 < d && (c = d, mp.events.callRemote("server_metalDetector_find")), 3 > w ? (j = 0, g = 0, i = e.ULTRA) : 4 > w ? (h = 350, g = 4.5, i = e.FAST) : 5 > w ? (h = 400, g = 3.75, i = e.FAST) : 6.5 > w ? (h = 425, g = 3, i = e.FAST) : 7.5 > w ? (h = 450, g = 2.5, i = e.FAST) : 10 > w ? (h = 500, g = 1.75, i = e.FAST) : 12.5 > w ? (h = 750, g = 1.25, i = e.MEDIUM) : 15 > w ? (h = 1e3, g = 1, i = e.MEDIUM) : 20 > w ? (h = 1250, g = .875, i = e.MEDIUM) : 25 > w ? (h = 1500, g = .75, i = e.SLOW) : 30 > w ? (h = 2e3, g = .5, i = e.SLOW) : (j = 0, g = 0, i = e.NONE);
            const x = new mp.Vector3(s + .75 * localPlayer.getForwardX(), u + .75 * localPlayer.getForwardY(), v - .75),
                y = i !== e.NONE && i !== e.ULTRA;
            if (i === e.NONE) k = 150, l = 255, m = 150, o = k, p = l, q = m;
            else if (i === e.SLOW) j += g, k = 150, l = 255, m = 150;
            else if (i === e.MEDIUM) j += g, k = 255, l = 255, m = 100;
            else if (i === e.FAST) j += g, k = 250, l = 150, m = 150;
            else if (i === e.ULTRA) {
                k = 255, l = 100, m = 100, r + 125 < d && (r = d, mp.game.audio.playSoundFrontend(-1, "ATM_WINDOW", "HUD_FRONTEND_DEFAULT_SOUNDSET", !1), mp.game.audio.playSoundFrontend(-1, "BOATS_PLANES_HELIS_BOOM", "MP_LOBBY_SOUNDS", !1)), n = 150;
                let a = 1.2 * f;
                mp.game.graphics.drawMarker(1, x.x, x.y, x.z, 0, 0, 0, 0, 0, 0, a, a, .2, k, l, m, n, !1, !1, 2, !1, null, null, !1), mp.game.graphics.drawMarker(6, x.x, x.y, x.z, 0, 0, 0, 270, 0, 0, a, .1, a, k, l, m, n, !1, !1, 2, !1, null, null, !1), n = 200, a = .7 * f, mp.game.graphics.drawMarker(1, x.x, x.y, x.z, 0, 0, 0, 0, 0, 0, a, a, .2, k, l, m, n, !1, !1, 2, !1, null, null, !1), mp.game.graphics.drawMarker(6, x.x, x.y, x.z, 0, 0, 0, 270, 0, 0, a, .1, a, k, l, m, n, !1, !1, 2, !1, null, null, !1), n = 255, a = .2 * f, mp.game.graphics.drawMarker(1, x.x, x.y, x.z, 0, 0, 0, 0, 0, 0, a, a, .2, k, l, m, n, !1, !1, 2, !1, null, null, !1), mp.game.graphics.drawMarker(6, x.x, x.y, x.z, 0, 0, 0, 270, 0, 0, a, .1, a, k, l, m, n, !1, !1, 2, !1, null, null, !1)
            }
            if (y) {
                100 < j && (j -= 100, o = k, p = l, q = m, mp.game.audio.playSoundFrontend(-1, "ATM_WINDOW", "HUD_FRONTEND_DEFAULT_SOUNDSET", !1));
                const a = j % 100 / 100 * f;
                n = Math.floor(255 - 155 * (j % 100 / 100)), mp.game.graphics.drawMarker(1, x.x, x.y, x.z, 0, 0, 0, 0, 0, 0, a, a, .2, o, p, q, n, !1, !1, 2, !1, null, null, !1), mp.game.graphics.drawMarker(6, x.x, x.y, x.z, 0, 0, 0, 270, 0, 0, a, .1, a, o, p, q, n, !1, !1, 2, !1, null, null, !1)
            }
        };
        mp.events.add("client_metalDetector_point", (c, e, f) => {
            let g = null,
                h = 999999999;
            for (const a of d) {
                const b = mp.dist(localPlayer.position.x, localPlayer.position.y, 0, a.x, a.y, 0);
                b < h && (g = a, h = b)
            }
            return void 0 === c ? g ? (a = g, void(b = h)) : void(a = null) : void(a = new mp.Vector3(c, e, f), b = mp.dist(localPlayer.position.x, localPlayer.position.y, 0, c, e, 0), g && h < b && (a = g, b = h))
        }), mp.events.add("client_metalDetector_createClientPoint", (a, b, c, e) => {
            d.push({
                key: a,
                x: b,
                y: c,
                z: e
            })
        }), mp.events.add("client_metalDetector_destroyClientPoint", b => {
            const c = d.find(a => a.key === b);
            c && c === a && (a = null), d = d.filter(a => a.key !== b)
        });
        const t = () => new Date().getTime()
    })(), (() => {
        const a = (a, b, c) => {
            const d = () => {
                const a = localPlayer.getVariable("cSen");
                a === b ? localPlayer.vehicle && mp.events.callRemote("s:items:flag:scen", c) : a === c && !localPlayer.vehicle && !localPlayer.isRagdoll() && !localPlayer.isInAir() && !localPlayer.isFalling() && !localPlayer.isGettingUp() && mp.events.callRemote("s:items:flag:scen", b)
            };
            let e = null;
            handItemEventOnSet(a, () => {
                global.disableAnimList = !0, e && clearInterval(e), e = setInterval(d, 1e3)
            }), handItemEventOnRemove(a, () => {
                global.disableAnimList = !1, e && clearInterval(e), e = null
            })
        };
        a("HI_FLAG_ANGELS", "flag_angels", "flag_angels_1"), a("HI_FLAG_LOSTMC", "flag_lostmc", "flag_lostmc_1"), a("HI_FLAG_BANDIDOS", "flag_bandidos", "flag_bandidos_1"), new global.CustomScenarioAnimWithItem("flag_angels", ["itemFlag_base", "itemFlag_angles"], "amb@world_human_partying@male@partying_beer@base", "base", 48), new global.CustomScenarioAnimWithItem("flag_lostmc", ["itemFlag_base", "itemFlag_lostmc"], "amb@world_human_partying@male@partying_beer@base", "base", 48), new global.CustomScenarioAnimWithItem("flag_bandidos", ["itemFlag_base", "itemFlag_bandidos"], "amb@world_human_partying@male@partying_beer@base", "base", 48), mp.attachmentMngr.register("itemFlag_base", "cls_prop_flagpole2", 28422, new mp.Vector3(0, 0, -.3), new mp.Vector3(0, 0, 0)), mp.attachmentMngr.register("itemFlag_angles", "cls_prop_flag_angeles_of_death2", 28422, new mp.Vector3(0, 0, -.3), new mp.Vector3(0, 0, 0)), mp.attachmentMngr.register("itemFlag_lostmc", "cls_prop_flag_lost_mc2", 28422, new mp.Vector3(0, 0, -.3), new mp.Vector3(0, 0, 0)), mp.attachmentMngr.register("itemFlag_bandidos", "cls_prop_flag_bandidos2", 28422, new mp.Vector3(0, 0, -.3), new mp.Vector3(0, 0, 0)), new global.CustomScenarioAnimWithItem("flag_angels_1", ["itemFlag_base_1", "itemFlag_angles_1"], "", "", 1), new global.CustomScenarioAnimWithItem("flag_lostmc_1", ["itemFlag_base_1", "itemFlag_lostmc_1"], "", "", 1), new global.CustomScenarioAnimWithItem("flag_bandidos_1", ["itemFlag_base_1", "itemFlag_bandidos_1"], "", "", 1), mp.attachmentMngr.register("itemFlag_base_1", "cls_prop_flagpole2", 24818, new mp.Vector3(-.4, -.15, 0), new mp.Vector3(0, 90, 0)), mp.attachmentMngr.register("itemFlag_angles_1", "cls_prop_flag_angeles_of_death2", 24818, new mp.Vector3(-.4, -.15, 0), new mp.Vector3(180, 90, 0)), mp.attachmentMngr.register("itemFlag_lostmc_1", "cls_prop_flag_lost_mc2", 24818, new mp.Vector3(-.4, -.15, 0), new mp.Vector3(180, 90, 0)), mp.attachmentMngr.register("itemFlag_bandidos_1", "cls_prop_flag_bandidos2", 24818, new mp.Vector3(-.4, -.15, 0), new mp.Vector3(180, 90, 0))
    })(), (() => {
        class a {
            constructor(a, b) {
                this.ped = a, this.dimension = this.ped.dimension, this.isHost = this.ped === localPlayer, this.champagne = null, this.step = -1;
                const c = [
                        ["ba_prop_battle_champ_open", "ba_prop_battle_champ_closed"],
                        ["ba_prop_battle_champ_open_02", "ba_prop_battle_champ_closed_02"],
                        ["ba_prop_battle_champ_open_03", "ba_prop_battle_champ_closed_03"]
                    ],
                    d = c[b % c.length];
                this.champModelOpen = d[0], this.champModelClosed = d[1], this.isEventStop = !1, this.animDict = "ANIM@AMB@NIGHTCLUB@MINI@DRINKING@CHAMPAGNE_DRINKING@BASE@", this.animName = "intro", this.isSpraying = !1, this.isShaking = !1, this.isEnd = !1, this.shakePowerLastIncrease = 0, this.shakePower = .4, this.shakePowerMin = .4, this.shakePowerMax = 1.4, this.shakePowerStep = .015, this.sprayDirection = {
                    center: !1,
                    up: !1,
                    down: !1,
                    left: !1,
                    right: !1
                }
            }
            check() {
                return !!(mp.objects.exists(this.champagne) && 0 !== this.champagne.handle && mp.players.exists(this.ped) && 0 !== this.ped.handle)
            }
            async setup() {
                mp.game.streaming.hasAnimDictLoaded(this.animDict) || mp.game.streaming.requestAnimDict(this.animDict), this.champagne = mp.objects.new(mp.game.joaat(this.champModelClosed), this.ped.position, {
                    alpha: 255,
                    dimension: this.dimension
                });
                let a = 1e3;
                do
                    if (await mp.game.waitAsync(10), 0 !== this.champagne.handle) break; while (0 < --a);
                return mp.objects.exists(this.champagne) && 0 !== this.champagne.handle && mp.players.exists(this.ped) && 0 !== this.ped.handle ? (this.champagne.attachTo(this.ped.handle, this.ped.getBoneIndex(28422), 0, 0, 0, 0, 0, 0, !0, !0, !1, !1, 2, !0), this.step = 5, this.render = new mp.Event("render", () => this.tick()), !0) : (mp.objects.exists(this.champagne) && this.champagne.destroy(), !1)
            }
            destroy() {
                mp.objects.exists(this.champagne) && this.champagne.destroy(), "undefined" != typeof this.render && (this.render.destroy(), this.render = void 0), this.isHost && !this.isEnd && (mp.events.callRemote("s:items:champagne:end"), this.isEnd = !0), this.step = -1
            }
            findSprayAnimName() {
                let a = "spray";
                this.sprayDirection.center ? (a += "_centre", a += this.sprayDirection.down ? "_down" : this.sprayDirection.up ? "_up" : "_mid") : (this.sprayDirection.left ? a += "_left" : this.sprayDirection.right && (a += "_right"), a += this.sprayDirection.left || this.sprayDirection.right ? this.sprayDirection.down ? "_down" : this.sprayDirection.up ? "_up" : "_mid" : this.sprayDirection.down ? "_centre_down" : this.sprayDirection.up ? "_centre_up" : "_centre_mid");
                return -1 === ["spray_centre_down", "spray_centre_mid", "spray_centre_up", "spray_left_down", "spray_left_mid", "spray_left_up", "spray_right_down", "spray_right_mid", "spray_right_up"].indexOf(a) ? void 0 : a
            }
            async changeChampModel(a) {
                if (this.isEventStop = !0, !mp.objects.exists(this.champagne)) return !1;
                const b = this.champagne.getCoords(!0),
                    c = this.champagne.dimension;
                this.champagne.destroy(), this.champagne = mp.objects.new(mp.game.joaat(a), b, {
                    alpha: 255,
                    dimension: c
                });
                let d = 35;
                do
                    if (await mp.game.waitAsync(10), 0 !== this.champagne.handle) break; while (0 < --d);
                return mp.objects.exists(this.champagne) && 0 !== this.champagne.handle && mp.players.exists(this.ped) && 0 !== this.ped.handle ? (this.isEventStop = !1, this.champagne.attachTo(this.ped.handle, this.ped.getBoneIndex(28422), 0, 0, 0, 0, 0, 0, !0, !0, !1, !1, 2, !0), !0) : (mp.objects.exists(this.champagne) && this.champagne.destroy(), !1)
            }
            async toggleSpray(a) {
                if (this.isSpraying !== a) {
                    if (this.isSpraying = a, this.isShaking = !1, a) {
                        if (!this.check()) return;
                        if (!(await this.changeChampModel(this.champModelOpen))) return void this.destroy();
                        if (!mp.game.streaming.hasNamedPtfxAssetLoaded("scr_ba_club")) {
                            mp.game.streaming.requestNamedPtfxAsset("scr_ba_club");
                            do await mp.game.waitAsync(10); while (!mp.game.streaming.hasNamedPtfxAssetLoaded("scr_ba_club"))
                        }
                        mp.game.graphics.setPtfxAssetNextCall("scr_ba_club"), this.particleFxHandle = mp.game.graphics.startParticleFxLoopedOnEntityBone("scr_ba_club_champagne_spray", this.champagne.handle, 0, 0, 0, 0, 0, 0, this.champagne.getBoneIndexByName("VFX"), 1, !1, !1, !1), this.animName = "spray_centre_mid", setTimeout(() => this.toggleSpray(!1), 11e3)
                    } else mp.game.graphics.doesParticleFxLoopedExist(this.particleFxHandle) && (mp.game.graphics.stopParticleFxLooped(this.particleFxHandle, !1), mp.game.graphics.removeParticleFx(this.particleFxHandle, !1)), this.animName = "outro";
                    this.isHost && mp.events.callRemote("s:items:champagne:toggle", a)
                }
            }
            tick() {
                if (!this.isEventStop) {
                    if (!this.check()) return void this.destroy();
                    switch (this.step) {
                        case 0: {
                            this.ped.taskGoStraightToCoord(1568.235, 249.0341, -49.0328, 1, 5e3, -167.69, .25), this.step++;
                            break
                        }
                        case 1: {
                            7 == this.ped.getScriptTaskStatus(2106541073) && (this.animDict = "ANIM@AMB@NIGHTCLUB@MINI@DRINKING@CHAMPAGNE_DRINKING@BASE@", this.animName = "intro", this.step++);
                            break
                        }
                        case 2: {
                            this.ped.isPlayingAnim(this.animDict, this.animName, 3) ? this.step++ : this.ped.taskPlayAnim(this.animDict, this.animName, 8, 1, -1, 0, 0, !1, !1, !1);
                            break
                        }
                        case 3: {
                            .15 <= this.ped.getAnimCurrentTime(this.animDict, this.animName) && this.step++;
                            break
                        }
                        case 4: {
                            mp.objects.exists(this.champagne) && 0 < this.champagne.handle && this.champagne.getAttachedTo() != this.ped.handle && (this.champagne.attachTo(this.ped.handle, this.ped.getBoneIndex(28422), 0, 0, 0, 0, 0, 0, !0, !0, !1, !1, 2, !0), this.step++);
                            break
                        }
                        case 5: {
                            this.animDict = "ANIM@AMB@NIGHTCLUB@MINI@DRINKING@CHAMPAGNE_DRINKING@BASE@", this.animName = "low", this.step++;
                            break
                        }
                        case 6: {
                            this.ped.isPlayingAnim(this.animDict, this.animName, 3) ? this.step++ : this.ped.taskPlayAnim(this.animDict, this.animName, 8, 1, -1, 1, 0, !1, !1, !1);
                            break
                        }
                        case 7: {
                            .15 <= this.ped.getAnimCurrentTime(this.animDict, this.animName) && (this.isShaking = !0, this.step++);
                            break
                        }
                        case 8: {
                            this.isShaking || this.isSpraying || (this.animDict = "ANIM@AMB@NIGHTCLUB@MINI@DRINKING@CHAMPAGNE_DRINKING@BASE@", this.animName = "outro", this.step++);
                            break
                        }
                        case 9: {
                            this.ped.isPlayingAnim(this.animDict, this.animName, 3) ? this.step++ : this.ped.taskPlayAnim(this.animDict, this.animName, 8, 1, -1, 1, 0, !1, !1, !1);
                            break
                        }
                        case 10: {
                            if (.4 <= this.ped.getAnimCurrentTime(this.animDict, this.animName)) return this.isEventStop = !0, setTimeout(() => {
                                this.destroy()
                            }, 200), this.ped.clearTasks(), void(this.isHost && mp.events.call("client_playerEffect_alco_start", 60));
                            break
                        }
                    }
                    if (this.isHost) {
                        if (this.isShaking) {
                            if (mp.game.controls.disableControlAction(0, 18, !0), this.shakePower === this.shakePowerMin && (this.shakePower += .001, mp.api.notify.info("\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u041F\u0420\u041E\u0411\u0415\u041B \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0448\u0430\u043C\u043F\u0430\u043D\u0441\u043A\u043E\u0435")), mp.game.controls.isControlJustPressed(0, 18) || mp.game.controls.isDisabledControlJustPressed(0, 18) || Date.now() > this.shakePowerLastIncrease + 350) {
                                this.shakePower += this.shakePowerStep, this.shakePowerLastIncrease = Date.now();
                                const a = 100 * ((this.shakePower - this.shakePowerMin) / (this.shakePowerMax - this.shakePowerMin));
                                100 <= a ? (d(100), this.toggleSpray(!0)) : d(a)
                            }
                            const a = 100 * ((this.shakePower - this.shakePowerMin) / (this.shakePowerMax - this.shakePowerMin));
                            0 < a && (this.animName = 75 < a ? "high" : 35 < a ? "medium" : "low", !this.ped.isPlayingAnim(this.animDict, this.animName, 3) && this.ped.taskPlayAnim(this.animDict, this.animName, 8, 1, -1, 1, 0, !1, !1, !1))
                        }
                        this.isSpraying && (mp.game.controls.isControlJustPressed(0, 32) ? (this.sprayDirection.up = !0, this.sprayDirection.down = !1, this.sprayDirection.center = !1, this.sprayDirection.left = !1, this.sprayDirection.right = !1, this.animName = this.findSprayAnimName() || this.animName) : mp.game.controls.isControlJustPressed(0, 33) ? (this.sprayDirection.up = !1, this.sprayDirection.down = !0, this.sprayDirection.center = !1, this.sprayDirection.left = !1, this.sprayDirection.right = !1, this.animName = this.findSprayAnimName() || this.animName) : mp.game.controls.isControlJustPressed(0, 34) ? (this.sprayDirection.left = !0, this.sprayDirection.right = !1, this.sprayDirection.center = !1, this.animName = this.findSprayAnimName() || this.animName) : mp.game.controls.isControlJustPressed(0, 35) && (this.sprayDirection.left = !1, this.sprayDirection.right = !0, this.sprayDirection.center = !1, this.animName = this.findSprayAnimName() || this.animName), !this.ped.isPlayingAnim(this.animDict, this.animName, 3) && this.ped.taskPlayAnim(this.animDict, this.animName, 1, -1, -1, 1, 0, !1, !1, !1))
                    }
                }
            }
        }
        mp.events.add("c:items:champagne:start", async (b, c) => {
            if (mp.players.exists(b) && 0 !== b.handle) {
                const d = new a(b, c);
                (await d.setup()) && b !== localPlayer && (b.__champagneTask = d)
            }
        }), mp.events.add("c:items:champagne:state", async (a, b) => {
            mp.players.exists(a) && 0 !== a.handle && a.__champagneTask && a.__champagneTask.toggleSpray(b)
        }), mp.events.add("c:items:champagne:end", async a => {
            mp.players.exists(a) && 0 !== a.handle && a.__champagneTask && (a.__champagneTask.destroy(), delete a.__champagneTask)
        });
        let b = !1,
            c = null;
        const d = a => {
            b || global.mainBrowser.execute(`mainHud.progressStart('Шампанское', 0, 0);`), global.mainBrowser.execute(`mainHud.progressValue(${a});`), c && clearTimeout(c), c = setTimeout(() => {
                b = !1, global.mainBrowser.execute(`mainHud.progressStop();`), c = null
            }, 500)
        }
    })(), mp.attachmentMngr.register("medicBox", "xm_prop_smug_crate_s_medical", 28422, new mp.Vector3(0, -.17, -.2), new mp.Vector3(45, 0, 0));
}