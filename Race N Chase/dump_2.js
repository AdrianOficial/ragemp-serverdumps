var currentJailTime = 0;਍瘀愀爀 氀愀猀琀䨀愀椀氀唀瀀搀愀琀攀 㴀 ㄀　㬀ഀഀ
਍瘀愀爀 挀栀愀猀攀刀甀渀渀椀渀最 㴀 昀愀氀猀攀㬀ഀഀ
var chaseTimeCur = 0;਍瘀愀爀 挀栀愀猀攀吀椀洀攀䴀愀砀 㴀 ㌀㤀　㬀ഀഀ
var chaseMode = 0; // 0= STANDARD | 1= BUSTED | and others as in SCRIPT਍瘀愀爀 挀漀氀氀椀猀椀漀渀吀椀洀攀 㴀 ⴀ㄀㬀ഀഀ
var updateRate = 200;਍ഀഀ
var chatStatus = false;਍瘀愀爀 挀栀愀琀匀琀愀琀甀猀䰀愀琀攀 㴀 昀愀氀猀攀㬀ഀഀ
var lastChatToggle = Date.now();਍瘀愀爀 猀琀爀攀攀琀一愀洀攀 㴀 渀甀氀氀㬀ഀഀ
var zoneName = null;਍瘀愀爀 猀栀漀眀䠀甀搀 㴀 琀爀甀攀㬀ഀഀ
var renderNametags = true;਍瘀愀爀 挀甀爀爀攀渀琀䴀甀琀攀吀椀洀攀 㴀 　㬀ഀഀ
var lastMuteUpdate = 10;਍瘀愀爀 氀愀猀琀䘀甀渀挀 㴀 ∀䤀渀椀琀∀㬀ഀഀ
਍瘀愀爀 䈀愀渀欀刀漀戀戀攀爀礀伀渀 㴀 昀愀氀猀攀㬀ഀഀ
਍瘀愀爀 匀栀漀眀嘀攀栀椀挀氀攀䐀䰀 㴀 昀愀氀猀攀㬀ഀഀ
var specCam = null;਍瘀愀爀 猀瀀攀挀匀琀愀琀攀 㴀 昀愀氀猀攀㬀ഀഀ
var specTarget = null;਍瘀愀爀 椀猀一漀䌀氀椀瀀 㴀 昀愀氀猀攀㬀ഀഀ
਍瘀愀爀 䰀愀猀琀䬀攀礀倀爀攀猀猀 㴀 　㬀ഀഀ
var AFKStage = 0;਍瘀愀爀 匀攀挀漀渀搀猀匀椀渀挀攀䰀愀猀琀䬀攀礀倀爀攀猀猀 㴀 　㬀 ⼀⼀ 甀猀椀渀最 琀栀椀猀 昀漀爀 渀愀洀攀琀愀最猀ഀഀ
਍瘀愀爀 猀栀漀眀刀攀琀椀挀甀氀攀 㴀 琀爀甀攀㬀ഀഀ
var showCustomCrosshair = false;਍瘀愀爀 猀栀漀眀䌀甀猀琀漀洀䌀爀漀猀猀栀愀椀爀䤀渀匀渀椀瀀攀爀 㴀 昀愀氀猀攀㬀ഀഀ
var alwaysShowCustomCrosshair = false;਍瘀愀爀 挀甀猀琀漀洀䌀爀漀猀猀栀愀椀爀伀渀 㴀 昀愀氀猀攀㬀ഀഀ
਍瘀愀爀 唀䤀䠀甀搀 㴀 渀甀氀氀㬀ഀഀ
var UIMenu = null;਍瘀愀爀 洀攀渀甀吀漀最最氀攀搀 㴀 昀愀氀猀攀㬀ഀഀ
var scoreboardToggled = false;਍瘀愀爀 猀挀漀爀攀戀漀愀爀搀䌀甀爀猀漀爀 㴀 昀愀氀猀攀㬀ഀഀ
਍瘀愀爀 挀甀昀昀吀愀爀最攀琀 㴀 渀甀氀氀㬀ഀഀ
var cuffInterval = null;਍ഀഀ
var disableSprint = false;਍ഀഀ
var FPS = 0; // This is the actual fps.਍瘀愀爀 䘀倀匀开䘀爀愀洀攀猀 㴀 　㬀ഀഀ
var FPS_Calc = Date.now();਍ഀഀ
var loginBrowser = null;਍ഀഀ
mp.players.local.Team = -1;਍洀瀀⸀最愀洀攀⸀瘀攀栀椀挀氀攀⸀搀攀昀愀甀氀琀䔀渀最椀渀攀䈀攀栀愀瘀椀漀甀爀 㴀 昀愀氀猀攀㬀ഀഀ
mp.game.gameplay.enableMpDlcMaps(true);਍洀瀀⸀最愀洀攀⸀瀀氀愀礀攀爀⸀搀椀猀愀戀氀攀嘀攀栀椀挀氀攀刀攀眀愀爀搀猀⠀⤀㬀ഀഀ
mp.game.player.setHealthRechargeMultiplier(0.0);਍洀瀀⸀最愀洀攀⸀瘀攀栀椀挀氀攀⸀猀攀琀䔀砀瀀攀爀椀洀攀渀琀愀氀䄀琀琀愀挀栀洀攀渀琀匀礀渀挀䔀渀愀戀氀攀搀⠀琀爀甀攀⤀㬀ഀഀ
mp.game.gameplay.setFadeOutAfterDeath(false);਍洀瀀⸀瀀氀愀礀攀爀猀⸀氀漀挀愀氀⸀猀攀琀䌀漀渀昀椀最䘀氀愀最⠀㐀㈀㤀Ⰰ 昀愀氀猀攀⤀㬀ഀഀ
mp.players.local.setRagdollFlag(2);਍ഀഀ
function traceLastFunc(iStr)਍笀ഀഀ
    mp.storage.data.lastFn = iStr;਍    洀瀀⸀猀琀漀爀愀最攀⸀昀氀甀猀栀⠀⤀㬀ഀഀ
}਍ഀഀ
traceLastFunc("Main::LoadIPLs()");਍⼀⼀ 眀栀攀爀攀 䤀倀䰀 渀愀洀攀猀 渀愀洀攀 漀昀 礀漀甀爀 ⸀礀洀愀瀀 昀椀氀攀 椀渀 搀氀挀 ⴀ㸀 洀愀瀀瀀椀渀最⸀爀瀀昀ഀഀ
if(!mp.game.streaming.isIplActive("blockheisttunnel") || !mp.game.streaming.isIplActive("derby") || ਍    ℀洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀椀猀䤀瀀氀䄀挀琀椀瘀攀⠀∀昀氀漀礀搀猀愀瀀琀∀⤀ 簀簀 ℀洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀椀猀䤀瀀氀䄀挀琀椀瘀攀⠀∀眀栀戀椀最∀⤀ 簀簀 ഀഀ
    !mp.game.streaming.isIplActive("whmed") || !mp.game.streaming.isIplActive("whsmall"))਍笀ഀഀ
	mp.game.invoke("0xD7C10C4A637992C9"); // _LOAD_SP_DLC_MAPS਍ऀ洀瀀⸀最愀洀攀⸀椀渀瘀漀欀攀⠀∀　砀　㠀㠀㠀䌀㌀㔀　㈀䐀䈀䈀䔀䔀䘀㔀∀⤀㬀 ⼀⼀ 开䰀伀䄀䐀开䴀倀开䐀䰀䌀开䴀䄀倀匀ഀഀ
}਍ഀഀ
mp.players.local.position = new mp.Vector3(-1018.5�