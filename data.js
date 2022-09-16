const UPGRADES =
  [{ "id": 1, "icon": "🐈", "name": "猫锻炼", "base": 0.5, "price": 20, "growth": 1.2, "level": 0 }, { "id": 2, "icon": "🤲🏻", "name": "猫猫拳", "base": 2, "price": 100, "growth": 1.2, "level": 0 }, { "id": 3, "icon": "👣", "name": "猫步", "base": 8, "price": 500, "growth": 1.3, "level": 0 }, { "id": 4, "icon": "👁", "name": "猫观察术", "base": 38, "price": 3000, "growth": 1.4, "level": 0 }, { "id": 5, "icon": "🦿", "name": "跑得快", "base": 152, "price": 15000, "growth": 1.5, "level": 0 }, { "id": 6, "icon": "😼", "name": "圆脑袋", "base": 811, "price": 100000, "growth": 1.6, "level": 0 }, { "id": 7, "icon": "〽️", "name": "超级尾巴", "base": 6488, "price": 1000000, "growth": 1.7, "level": 0 }];

const EQUIPMENTS = [{ "id": 1, "icon": "🪣", "name": "兔桶", "price": 500, "base": 0.05 }, { "id": 2, "icon": "🗑", "name": "兔笼", "price": 1500, "base": 0.06 }, { "id": 3, "icon": "🕳", "name": "陷阱", "price": 2750, "base": 0.07 }, { "id": 4, "icon": "🥕", "name": "诱饵", "price": 4400, "base": 0.08 }, { "id": 5, "icon": "🪤", "name": "高级陷阱", "price": 7480, "base": 0.09 }, { "id": 6, "icon": "🍟", "name": "高级诱饵", "price": 12716, "base": 0.1 }, { "id": 7, "icon": "🥤", "name": "特级诱饵", "price": 21618, "base": 0.12 }, { "id": 10, "icon": "🚜", "name": "脱兔机", "price": 36751, "base": 0.14 }, { "id": 11, "icon": "🛳", "name": "捕兔轮", "price": 66152, "base": 0.16 }, { "id": 12, "icon": "🔭", "name": "望兔镜", "price": 119074, "base": 0.18 }, { "id": 13, "icon": "📡", "name": "探洞仪", "price": 214334, "base": 0.2 }, { "id": 14, "icon": "🚊", "name": "运兔车", "price": 385802, "base": 0.23 }, { "id": 15, "icon": "🏗", "name": "兔工厂", "price": 694444, "base": 0.26 }, { "id": 16, "icon": "🏎", "name": "超猫快车", "price": 1250000, "base": 0.3 }, { "id": 17, "icon": "🚁", "name": "超猫直升机", "price": 2500000, "base": 0.34 }, { "id": 18, "icon": "🛸", "name": "超猫飞行器", "price": 5000000, "base": 0.38 }, { "id": 19, "icon": "🛰", "name": "超猫航天器", "price": 10000000, "base": 0.43 }, { "id": 20, "icon": "🪄", "name": "猫魔法", "price": 100000000, "base": 0.5 }];

const HELPERS = [{ "id": 1, "icon": "🐌", "name": "妞妞", "price": 1000, "base": 0.1 }, { "id": 2, "icon": "🐇", "name": "阿兔", "price": 5000, "base": 0.2 }, { "id": 3, "icon": "🐣", "name": "吉吉", "price": 10000, "base": 0.3 }, { "id": 4, "icon": "🐬", "name": "海豚豚", "price": 25000, "base": 0.4 }, { "id": 5, "icon": "🐒", "name": "猴", "price": 50000, "base": 0.5 }, { "id": 6, "icon": "🦒", "name": "长脖子", "price": 110318, "base": 0.6 }, { "id": 7, "icon": "🤖", "name": "猫机器人", "price": 220635, "base": 0.7 }, { "id": 8, "icon": "🐈‍⬛", "name": "黑猫警长", "price": 364048, "base": 0.8 }, { "id": 9, "icon": "🐋", "name": "大鱼", "price": 600679, "base": 0.9 }, { "id": 10, "icon": "🐼", "name": "黑白", "price": 991120, "base": 1 }, { "id": 11, "icon": "🦅", "name": "老鸟", "price": 1635348, "base": 1.1 }, { "id": 12, "icon": "🐯", "name": "老虎", "price": 2698325, "base": 1.2 }, { "id": 13, "icon": "🦁", "name": "老狮", "price": 4452236, "base": 1.3 }, { "id": 14, "icon": "🐙", "name": "老张", "price": 7346189, "base": 1.4 }, { "id": 15, "icon": "🦉", "name": "老猫头鹰", "price": 12121212, "base": 1.5 }, { "id": 16, "icon": "🦖", "name": "？？？", "price": 20000000, "base": 2, }];
