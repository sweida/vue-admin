import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
// import home from '@/view/home'
// const login = resolve => require(['@/view/login'], resolve)
const home = resolve => require(['@/view/home'], resolve)
const welcome = resolve => require(['@/view/welcome/welcome'], resolve)
const message = resolve => require(['@/view/message/message'], resolve)
const password = resolve => require(['@/view/message/password'], resolve)

const detailList = resolve => require(['@/view/purchase/detailList/detailList'], resolve)
const chaseReturn = resolve => require(['@/view/purchase/chaseReturn/chaseReturn'], resolve)
const chaseOrder = resolve => require(['@/view/purchase/chaseOrder/chaseOrder'], resolve)
const putIn = resolve => require(['@/view/purchase/putIn/putIn'], resolve)
const returnStock = resolve => require(['@/view/purchase/returnStock/returnStock'], resolve)

const allot = resolve => require(['@/view/repertory/allot/allot'], resolve)
const burdening = resolve => require(['@/view/repertory/burdening/burdening'], resolve)
const editBurdening = resolve => require(['@/view/repertory/burdening/edit'], resolve)
const checkStock = resolve => require(['@/view/repertory/checkStock/checkStock'], resolve)
const Output = resolve => require(['@/view/repertory/Output/Output'], resolve)
const productsOutput = resolve => require(['@/view/repertory/productsOutput/productsOutput'], resolve)
const sureAllot = resolve => require(['@/view/repertory/sureAllot/sureAllot'], resolve)

const express = resolve => require(['@/view/baseData/express/express'], resolve)
const materialInfo = resolve => require(['@/view/baseData/materialInfo/materialInfo'], resolve)
const payType = resolve => require(['@/view/baseData/payType/payType'], resolve)
const StoreInfo = resolve => require(['@/view/baseData/StoreInfo/StoreInfo'], resolve)
const unitSetup = resolve => require(['@/view/baseData/unitSetup/unitSetup'], resolve)

const allotList = resolve => require(['@/view/queryData/allotList/allotList'], resolve)
const checkList = resolve => require(['@/view/queryData/checkList/checkList'], resolve)
const inventoryWarning = resolve => require(['@/view/queryData/inventoryWarning/inventoryWarning'], resolve)
const OutputList = resolve => require(['@/view/queryData/OutputList/OutputList'], resolve)
const putDetailList = resolve => require(['@/view/queryData/putDetailList/putDetailList'], resolve)
const stockList = resolve => require(['@/view/queryData/stockList/stockList'], resolve)
const validWarning = resolve => require(['@/view/queryData/validWarning/validWarning'], resolve)

Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/login',
      component: login,
      name: 'login',
      hidden: true
    },
    {
      path: '/',
      component: login,
      redirect: {
        name: 'login'
      }
    },
    {
      path: '*',
      component: welcome,
      redirect: {
        name: 'welcome'
      }
    },
    {
      path: '/home',
      component: home,
      children: [
        { path: '/', component: welcome, name: 'welcome' },

        { path: '/chaseOrder', component: chaseOrder, name: '采购订单' },
        { path: '/chaseReturn', component: chaseReturn, name: '采购退货' },
        { path: '/putIn', component: putIn, name: '进货入库' },
        { path: '/detailList', component: detailList, name: '进货入库明细表' },
        { path: '/returnStock', component: returnStock, name: '退货出库' },

        { path: '/allot', component: allot, name: '库存调拨' },
        { path: '/sureAllot', component: sureAllot, name: '确认调拨' },
        { path: '/checkStock', component: checkStock, name: '库存盘点' },
        { path: '/burdening', component: burdening, name: '配料' },
        { path: '/burdening/edit/:id', component: editBurdening, name: '配料明细' },
        { path: '/productsOutput', component: productsOutput, name: '销售产品出库' },
        { path: '/Output', component: Output, name: '出库' },

        { path: '/StoreInfo', component: StoreInfo, name: '仓库信息' },
        { path: '/unitSetup', component: unitSetup, name: '计量单位设置' },
        { path: '/payType', component: payType, name: '支付方式' },
        { path: '/materialInfo', component: materialInfo, name: '物料信息' },
        { path: '/express', component: express, name: '快递公司' },

        { path: '/inventoryWarning', component: inventoryWarning, name: '查询库存预警' },
        { path: '/validWarning', component: validWarning, name: '查询库存有效期预警' },
        { path: '/stockList', component: stockList, name: '查询库存记录' },
        { path: '/allotList', component: allotList, name: '查询调拨记录' },
        { path: '/checkList', component: checkList, name: '查询盘点记录' },
        { path: '/OutputList', component: OutputList, name: '查询出库记录' },
        { path: '/putDetailList', component: putDetailList, name: '查询出库明细记录表' },

        { path: '/message', component: message, name: '信息' },
        { path: '/password', component: password, name: '修改密码' }
      ]
    }
  ]
})
