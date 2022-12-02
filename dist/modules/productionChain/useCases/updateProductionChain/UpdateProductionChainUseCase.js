"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateProductionChainUseCase = void 0;
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _IFoodRepository = require("@modules/food/reposotories/IFoodRepository");
var _IProductionChainRepository = require("@modules/productionChain/repositories/IProductionChainRepository");
var _IProductionType = require("@modules/productionType/repositories/IProductionType");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _prisma = require("@shared/infra/prisma");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class;
let UpdateProductionChainUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ProductionChainRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("FoodRepository")(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 2);
}, _dec5 = function (target, key) {
  return (0, _tsyringe.inject)("ProductionTypeRepository")(target, undefined, 3);
}, _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", [typeof _IProductionChainRepository.IProductionChainRepository === "undefined" ? Object : _IProductionChainRepository.IProductionChainRepository, typeof _IFoodRepository.IFoodRepository === "undefined" ? Object : _IFoodRepository.IFoodRepository, typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository, typeof _IProductionType.IProductionTypeRepository === "undefined" ? Object : _IProductionType.IProductionTypeRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = class UpdateProductionChainUseCase {
  constructor(productionChainRepository, foodRepository, companyRepository, productionTypeRepository) {
    this.productionChainRepository = productionChainRepository;
    this.foodRepository = foodRepository;
    this.companyRepository = companyRepository;
    this.productionTypeRepository = productionTypeRepository;
  }
  async execute({
    companyId,
    description,
    endDateTime,
    foodId,
    ingredientIds,
    productionTypeId,
    providerIds,
    startDateTime,
    name,
    quantity,
    id
  }) {
    const companyExists = await this.companyRepository.findById(companyId);
    if (!companyExists) {
      throw new _AppError.AppError("the informed company does not exist.");
    }
    const productionChainExists = await this.productionChainRepository.findById({
      id,
      companyId
    });
    if (!productionChainExists) {
      throw new _AppError.AppError("the informed production chain was not found.");
    }
    if (foodId) {
      const foodExits = await this.foodRepository.findById({
        companyId,
        id: foodId
      });
      if (!foodExits) {
        throw new _AppError.AppError("the reported food was not found.");
      }
    }
    if (productionTypeId) {
      const productionTypeExists = await this.productionTypeRepository.findById(companyId, productionTypeId);
      if (!productionTypeExists) {
        throw new _AppError.AppError("production type not found.");
      }
    }
    const response = await this.productionChainRepository.create({
      companyId,
      description,
      endDateTime,
      foodId,
      name,
      productionTypeId,
      quantity,
      startDateTime
    });
    if (ingredientIds) {
      ingredientIds.forEach(async ingredientId => {
        await _prisma.prisma.ingredientProductionChain.create({
          data: {
            productionChainId: response.id,
            ingredientId
          }
        });
      });
    }
    if (providerIds) {
      providerIds.forEach(async providerId => {
        await _prisma.prisma.providerProductionChain.create({
          data: {
            productionChainId: response.id,
            providerId
          }
        });
      });
    }
    return response;
  }
}) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
exports.UpdateProductionChainUseCase = UpdateProductionChainUseCase;