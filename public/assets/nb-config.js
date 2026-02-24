// =====================================================
// nb-config.js - PATCHED FOR LOCAL USE
// All API URLs redirected to localhost:8080/api/mock/
// =====================================================
var LOCAL_MOCK = 'http://localhost:8080/api/mock';

window.__nb_domain = {
    userLoginApi: LOCAL_MOCK + '/login/username',
    passportUrl: LOCAL_MOCK,
    baseUrl: 'http://localhost:8080',
    accountUrl: LOCAL_MOCK,
    cookieDomain: 'localhost',
};

var insert_config = {
    lan: 'vi',
    learnGuidId: '180',
    __nb_hide_school: 'true',
    api: {
        checkLoginUrl: '',
        loginOutTUrl: '',
        storageUrl: LOCAL_MOCK,
        activateUrl: LOCAL_MOCK,
        consoleUrl: LOCAL_MOCK,
        consolePcUrl: LOCAL_MOCK,
        passportUrl: LOCAL_MOCK,
        accountUrl: LOCAL_MOCK,
        activePhoneUrl: LOCAL_MOCK,
        buyVipBase: LOCAL_MOCK,
        sharePhy: LOCAL_MOCK,
        shareChem: LOCAL_MOCK,
        serverTimeHost: LOCAL_MOCK,
        originUrl: 'http://localhost:8080',
        nbHelp: LOCAL_MOCK,
        perfectUrl: LOCAL_MOCK,
        wechatAppletUrl: LOCAL_MOCK,
        phywebexam: LOCAL_MOCK,
        chemwebexam: LOCAL_MOCK,
        u5: {
            baseUrl: LOCAL_MOCK,
            list: {
                paymentUrl: LOCAL_MOCK,
            }
        },
    }
};

window.__nb_config = insert_config;

window.__nb_sensors = {
    enabled: 'false',
    showlog: '',
    tenantName: 'nobook_en',
    project: 'nobook_prod'
};

window.__nb_howxm = { appId: '' };
window.__nb_sentry = { enabled: '' };
window.__nb_resolution = '';
window.__nb_hideNBElement = 'true';
window.__nb_hideUserPopver = 'true';
window.__nb_hideLoginRegister = 'true';
window.__nb_vipEndTip = '';
window.__nb_noWebTip = '';
window.__nb_loginEndTip = '';
window.__nb_resource_sort_type = '';
window.__nb_show_language_btn = '1';

// Inject a fake logged-in user to skip login check
window.__nb_fake_user = {
    userId: 'local_user_001',
    nickName: 'Local User',
    isLogin: true,
    isVip: true,
    token: 'mock_token_local_2026',
    subjectId: 2,
    lang: 'vi'
};

try {
    const arr = Object.keys(window).filter((item) => /^__nb_/.test(item));
    arr.forEach(key => {
        if (/^(true|false)$/ig.test(window[key])) {
            window[key] = /(true)/ig.test(window[key]);
        }
    });
} catch (err) { }

window.__vip_rate_limit_config = {
    VIP_RATE_LIMIT_URL: LOCAL_MOCK + '/experiment/v1/Play'
};