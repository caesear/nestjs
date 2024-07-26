"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsController = void 0;
const common_1 = require("@nestjs/common");
const songs_service_1 = require("./songs.service");
const create_song_dto_1 = require("./dto/create-song.dto");
const update_song_dto_1 = require("./dto/update-song.dto");
let SongsController = class SongsController {
    constructor(songsService) {
        this.songsService = songsService;
    }
    async create(createSongDTO) {
        try {
            const result = await this.songsService.create(createSongDTO);
            return result;
        }
        catch (e) {
            throw new common_1.HttpException('Could not create song', common_1.HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: e,
            });
        }
    }
    async findAll() {
        try {
            return await this.songsService.findAll();
        }
        catch (e) {
            throw new common_1.HttpException('Could not fetch songs', common_1.HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: e,
            });
        }
    }
    async findOne(id) {
        try {
            return await this.songsService.findOne(id);
        }
        catch (e) {
            throw new common_1.HttpException('Could not fetch song', common_1.HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: e,
            });
        }
    }
    async update(id, updateSongDTO) {
        try {
            return await this.songsService.update(id, updateSongDTO);
        }
        catch (e) {
            throw new common_1.HttpException('Could not update song', common_1.HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: e,
            });
        }
    }
    async delete(id) {
        try {
            return await this.songsService.delete(id);
        }
        catch (e) {
            throw new common_1.HttpException('Could not delete song', common_1.HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: e,
            });
        }
    }
};
exports.SongsController = SongsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_song_dto_1.CreateSongDto]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_song_dto_1.UpdateSongDto]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "delete", null);
exports.SongsController = SongsController = __decorate([
    (0, common_1.Controller)('songs'),
    __metadata("design:paramtypes", [songs_service_1.SongsService])
], SongsController);
//# sourceMappingURL=songs.controller.js.map