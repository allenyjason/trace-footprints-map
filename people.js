/* ============================================================
 * 名人很忙 · 行迹图 —— 名人清单（可复制迁移）
 * ------------------------------------------------------------
 * 本文件与各个 .html 放在同一文件夹，随文件夹一起拷贝到教室电脑即可。
 * 新增一位名人：把做好的 xxx.html 放进同文件夹，再在下面数组加一行即可，
 * 首页会同时生效，无需改 html。
 *
 * 字段说明：
 *   file   : html 文件名（用姓名拼音，短）
 *   name   : 显示姓名
 *   dynasty: 朝代（图例前缀）
 *   home   : 故乡（首页卡片用）
 *   tip    : 一句话行程概览（首页卡片用）
 *   done   : true=已制作可跳转；false=未制作，首页显示为「未制作」且不跳转
 *
 * 排序：按一生行迹范围广到窄（走得多的排前面）。排名可随教学需要微调。
 * ============================================================ */
window.PEOPLE = [
  { file: 'zhenghe.html',    name: '郑和',   dynasty: '明',   home: '云南·昆阳',
    tip: '七下西洋，有来有回：带出丝绸瓷器茶叶，带回胡椒苏木、宝石香料与麒麟狮子', done: true },
  { file: 'xuanzang.html',  name: '玄奘',   dynasty: '唐',   home: '洛州·缑氏',
    tip: '629年私往天竺：凉州→瓜州→玉门关→莫贺延碛→高昌→凌山→碎叶→撒马尔罕→巴米扬→克什米尔→那烂陀→曲女城，645年携657部经归', done: true },
  { file: 'qiuchuji.html',   name: '丘处机', dynasty: '元',   home: '登州·栖霞',
    tip: '73岁西行：莱州→燕京→阿尔泰山→阿里马→撒马尔罕→大雪山觐见成吉思汗，一言止杀', done: true },
  { file: 'zhangqian.html',  name: '张骞',   dynasty: '汉',   home: '汉中·城固',
    tip: '两使西域，被匈奴扣留十余岁仍持汉节，凿空丝路，带回天马、苜蓿与葡萄', done: true },
  { file: 'jianzhen.html',   name: '鉴真',   dynasty: '唐',   home: '扬州·江阳',
    tip: '扬州大明寺应请，六次东渡：744舟破、748漂流海南失明、753六渡成功，759建唐招提寺', done: true },
  { file: 'faxian.html',     name: '法显',   dynasty: '东晋', home: '平阳·武阳',
    tip: '六十二岁发长安：河西→敦煌→鄯善→于阗→竭叉→葱岭→北天竺→巴连弗邑写律三年→多摩梨帝→师子国见白绢扇→耶婆提→牢山登陆→建康译经→卒荆州', done: true },
  { file: 'xuxiake.html',    name: '徐霞客', dynasty: '明',   home: '江阴',
    tip: '三十余年遍历 19 省：天台雁荡黄山武夷 → 华山西行 → 衡州 → 桂林 → 黄果树 → 盘江 → 昆明 → 丽江 → 腾冲 → 鸡足山', done: true },
  { file: 'yeluchucai.html', name: '耶律楚材', dynasty: '元', home: '契丹·中都',
    tip: '中都 → 云中 → 涉大碛 → 怯绿连河见成吉思汗 → 越金山 → 别失八里 → 阿里马 → 虎司窝鲁朵 → 塔剌思 → 讹打剌 → 撒马尔罕 → 布哈拉 → 征西夏灵州取大黄 → 十路课税使 → 卒于哈拉和林', done: true },
  { file: 'zhoudaguan.html', name: '周达观', dynasty: '元',   home: '温州·永嘉',
    tip: '永嘉 → 明州集结 → 温州港开洋 → 闽广诸港 → 七洲洋 → 占城 → 真蒲 → 昆仑洋 → 查南 → 吴哥居留一年 → 归泊四明', done: true },
  { file: 'wangdayuan.html', name: '汪大渊', dynasty: '元',   home: '江西南昌',
    tip: '南昌 → 泉州首航 → 占城、真腊、三佛齐、爪哇 → 锡兰、古里佛 → 波斯湾甘埋里、巴士拉 → 红海天堂 → 东非马林迪、桑给巴尔 → 再航南海：浡泥、马尼拉 → 彭湖 → 著《岛夷志略》', done: true },
  { file: 'yijing.html',     name: '义净',   dynasty: '唐',   home: '齐州·山茌',
    tip: '咸亨二年附舶广州：室利佛逝→裸人国→耽摩立底→那烂陀十载→旋踵东归巨港译经四年→永昌元年归广府→洛阳→长安大荐福寺，译经五十六部', done: true },
  { file: 'ganying.html',    name: '甘英',   dynasty: '汉',   home: '扶风',
    tip: '永元九年受命：敦煌→龟兹它乾城→莎车→涉悬度→罽宾→大月氏→木鹿→和椟→斯宾→条支临西海欲度，安息船人一言乃止，穷临西海以望大秦', done: true },
  { file: 'kongzi.html',     name: '孔子',   dynasty: '春秋', home: '鲁·曲阜',
    tip: '曲阜 → 洛邑 → 临淄 → 帝丘 → 匡蒲 → 陈蔡 → 叶 → 归鲁（周游列国十四年）', done: true },
  { file: 'simaqian.html',   name: '司马迁', dynasty: '汉',   home: '夏阳·龙门',
    tip: '龙门 → 长安 → 会稽禹穴 → 长沙 → 曲阜 → 彭城 → 长安，二十漫游后受刑著《史记》', done: true },
  { file: 'sushi.html',      name: '苏轼',   dynasty: '北宋', home: '四川·眉山',
    tip: '眉山出蜀 → 凤翔 → 开封 → 杭州 → 密州 → 黄州 → 惠州 → 儋州 → 常州', done: true },
  { file: 'libai.html',      name: '李白',   dynasty: '唐',   home: '蜀·绵州',
    tip: '出蜀漫游，遍历吴越、荆楚、中原、梁宋，足迹几半大唐', done: true },
  { file: 'dufu.html',       name: '杜甫',   dynasty: '唐',   home: '河南·巩县',
    tip: '巩县 → 洛阳 → 长安 → 鄜州 → 华州 → 秦州同谷 → 成都草堂 → 夔州 → 岳阳，诗史一身', done: true },
  { file: 'linzexu.html',    name: '林则徐', dynasty: '清',   home: '福建·侯官',
    tip: '侯官 → 杭州 → 虎门销烟 → 镇海 → 伊犁戍边 → 开封治水', done: true },
  { file: 'wangyangming.html', name: '王阳明', dynasty: '明', home: '浙江·余姚',
    tip: '余姚 → 京师 → 龙场悟道 → 庐陵 → 南昌平乱 → 越中讲学 → 广西出征 → 卒于南安舟中', done: true },
  { file: 'guyanwu.html',    name: '顾炎武', dynasty: '清',   home: '南直隶·昆山',
    tip: '昆山抗清、六谒孝陵 → 弃家北游：章丘垦田、山海关、曲阜、太原、济南诗案 → 拒修《明史》→ 定居华阴 → 卒于曲沃，二十余年不归', done: true },
  { file: 'lishizhen.html',  name: '李时珍', dynasty: '明',   home: '湖广·蕲州',
    tip: '蕲州 → 武昌楚王府 → 京师太医院 → 武当庐山采药 → 蕲州，二十七载成《本草纲目》', done: true },
  { file: 'lidayuan.html',   name: '郦道元', dynasty: '北魏', home: '范阳·涿州',
    tip: '涿州 → 随父居青州 → 平城为郎、从北巡阴山 → 迁都洛阳 → 冀州长史 → 颍川太守 → 鲁阳立学 → 东荆州免官 → 河南尹 → 御史中尉 → 关右大使，遇害于阴盘驿亭', done: true },
  { file: 'xielingyun.html', name: '谢灵运', dynasty: '南朝宋', home: '会稽·始宁',
    tip: '建康出仕→永嘉太守一周而诗名千古（池塘生春草）→始宁筑墅→东山剡县天姥→再征秘书监→临川内史→诏于广州弃市，开山水诗一派', done: true },
  { file: 'wenzhenxiang.html', name: '文天祥', dynasty: '南宋', home: '赣·庐陵',
    tip: '毁家抗元，转战江西、福建、广东，兵败被俘北上大都', done: true },
  { file: 'suzhe.html',      name: '苏辙',   dynasty: '北宋', home: '四川·眉山',
    tip: '眉山 → 汴京 → 大名 → 齐州 → 筠州 → 袁州 → 化州 → 颍昌，三苏之一，谥文定', done: true },
  { file: 'huangzunxian.html', name: '黄遵宪', dynasty: '清', home: '广东·嘉应',
    tip: '十二年职业外交：东京参赞著《日本国志》→旧金山总领事护侨→伦敦作《今别离》→新加坡总领事→归国办时务报、时务学堂→戊戌革职→卒嘉应', done: true },
  { file: 'kangyouwei.html', name: '康有为', dynasty: '清',   home: '广东·南海',
    tip: '南海 → 北京第一次上书 → 广州万木草堂 → 公车上书 → 戊戌变法 → 亡命海外十六年：横滨、温哥华、新加坡、大吉岭、罗马、斯德哥尔摩、纽约、墨西哥城 → 归上海 → 终青岛', done: true },
  { file: 'liangqichao.html', name: '梁启超', dynasty: '清', home: '广东·新会',
    tip: '新会 → 公车上书 → 上海《时务报》→ 长沙时务学堂 → 戊戌变法 → 亡命日本 → 檀香山 → 澳洲三州 → 《新民丛报》→ 北美 → 归国讨伐复辟 → 巴黎和会 → 清华研究院', done: true },
  { file: 'baijuyi.html',    name: '白居易', dynasty: '唐',   home: '豫·新郑',
    tip: '贬江州、忠州，量移苏杭，宦辙连南北', done: true },
  { file: 'luyou.html',      name: '陆游',   dynasty: '南宋', home: '越州·山阴',
    tip: '山阴 → 临安锁厅试被黜 → 福州宁德 → 镇江 → 隆兴 → 夔州入蜀（著《入蜀记》）→ 南郑前线 → 嘉州 → 成都 → 抚州赈灾 → 严州刻《剑南诗稿》→ 归三山别业，绝笔《示儿》', done: true },
];
