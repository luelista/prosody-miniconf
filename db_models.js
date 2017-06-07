
module.exports = function(config) {
        const Sequelize = require('sequelize');
        const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword);

        const UserInfo = sequelize.define('user_info', {
                jid: Sequelize.STRING(255),
                name: Sequelize.STRING(64),
                value: Sequelize.TEXT,
        })

        const Room = sequelize.define('room', {
                name: Sequelize.STRING(255),
                subject: Sequelize.TEXT,
        })
        const Member = sequelize.define('member', {
                jid: Sequelize.STRING(255),
                nick: Sequelize.STRING(80),
                xmppshow: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
        })
        const RoomProperty = sequelize.define('room_property', {
                name: Sequelize.STRING(64),
                value: Sequelize.TEXT,
        })

        const Message = sequelize.define('message', {
                by: Sequelize.STRING(80),
                msg: Sequelize.TEXT,
                ts: Sequelize.TIMESTAMP,
                stanza_id: Sequelize.STRING(80),
                jid: Sequelize.STRING(255),
                replace_stanza_id: { type: Sequelize.STRING(80), allowNull: true, defaultValue: null },
        })

        Member.belongsTo(Room);
        RoomProperty.belongsTo(Room);
        Message.belongsTo(Room);
        Room.hasMany(Member);
        Room.hasMany(RoomProperty);
        Room.hasMany(Message);



        return {
                sequelize:     sequelize,
                UserInfo:      UserInfo,
                Room:          Room,
                Member:        Member,
                RoomProperty:  RoomProperty,
                Message:       Message,
        };

};
