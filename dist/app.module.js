"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const songs_module_1 = require("./songs/songs.module");
const artist_module_1 = require("./artist/artist.module");
const auth_module_1 = require("./auth/auth.module");
const logger_middleware_1 = require("./common/middleware/logger.middleware");
const songs_controller_1 = require("./songs/songs.controller");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes(songs_controller_1.SongsController);
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            songs_module_1.SongsModule,
            artist_module_1.ArtistModule,
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    const uri = configService.get('MONGODB_URI');
                    console.log(`Connecting to MongoDB with URI: ${uri}`);
                    return {
                        uri,
                        connectionFactory: (connection) => {
                            connection.on('connected', () => {
                                console.log('MongoDB connected');
                            });
                            connection.on('error', (err) => {
                                console.error(`MongoDB connection error: ${err.message}`);
                            });
                            connection.on('disconnected', () => {
                                console.log('MongoDB disconnected');
                            });
                            return connection;
                        },
                        connectTimeoutMS: 30000,
                        socketTimeoutMS: 45000,
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map