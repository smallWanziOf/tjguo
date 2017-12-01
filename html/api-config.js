if(process.env.NODE_ENV == 'production'){
  /*正式环境配置*/
  self.apiGateway = 'http://localhost:8010';
}else if(process.env.NODE_ENV == 'test'){
  /*测试环境配置*/
  self.apiGateway = 'http://192.168.10.100:8001';
}else{
  /*开发环境配置*/
  self.apiGateway = 'http://localhost:8080';
}
/*语言配置*/
self.Lang = `lang=zh_CN`;
/*内容管理*/
self.cmService = `${apiGateway}/core/restapi/public`;
/*用户管理*/
self.umService = `${apiGateway}/core/restapi/public`;
/*权限管理*/
self.authService = `${apiGateway}/core/restapi/private`;