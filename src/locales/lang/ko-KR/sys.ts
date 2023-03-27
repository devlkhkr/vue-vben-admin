export default {
  api: {
    operationSuccess: '작업 성공',
    operationFailed: '작업 실패',
    errorTip: '오류 알림',
    successTip: '성공 알림',
    errorMessage: '작업 실패, 시스템이 비정상적입니다!',
    timeoutMessage: '로그인 시간이 초과되었습니다. 다시 로그인하십시오!',
    apiTimeoutMessage:
      '인터페이스 요청 시간이 초과되었습니다. 페이지를 새로고침하고 다시 시도하십시오!',
    apiRequestFailed: '인터페이스 요청이 실패했습니다. 나중에 다시 시도하십시오!',
    networkException: '네트워크 이상',
    networkExceptionMsg: '네트워크 연결이 정상인지 확인하십시오! 네트워크 이상',
    errMsg401: '사용자에게 권한이 없습니다 (토큰, 사용자 이름, 암호 오류)!',
    errMsg403: '사용자는 인증되었지만 액세스가 거부되었습니다!',
    errMsg404: '네트워크 요청 오류, 리소스를 찾을 수 없습니다!',
    errMsg405: '네트워크 요청 오류, 요청 방법이 허용되지 않습니다!',
    errMsg408: '네트워크 요청 시간이 초과되었습니다!',
    errMsg500: '서버 오류, 관리자에게 문의하십시오!',
    errMsg501: '네트워크가 구현되지 않았습니다!',
    errMsg502: '네트워크 오류!',
    errMsg503:
      '서비스를 사용할 수 없습니다. 서버가 일시적으로 과부하 상태이거나 유지 관리 중입니다!',
    errMsg504: '네트워크 시간 초과!',
    errMsg505: 'http 버전이 요청을 지원하지 않습니다!',
  },
  app: {
    logoutTip: '알림',
    logoutMessage: '로그아웃 하시겠습니까?',
    menuLoading: '메뉴 로딩 중...',
  },
  errorLog: {
    tableTitle: '오류 로그 목록',
    tableColumnType: '유형',
    tableColumnDate: '시간',
    tableColumnFile: '파일',
    tableColumnMsg: '오류 메시지',
    tableColumnStackMsg: '스택 정보',

    tableActionDesc: '세부 정보',

    modalTitle: '오류 세부 정보',

    fireVueError: 'Vue 오류 발생',
    fireResourceError: '리소스 오류 발생',
    fireAjaxError: 'Ajax 오류 발생',

    enableMessage:
      '/src/settings/projectSetting.ts에서 useErrorHandle=true를 사용할 때만 유효합니다.',
  },
  exception: {
    backLogin: '로그인 화면으로',
    backHome: '홈 화면으로',
    subTitle403: "Sorry, you don't have access to this page.",
    subTitle404: '죄송합니다. 방문한 페이지가 존재하지 않습니다.',
    subTitle500: '죄송합니다. 서버에서 오류를 보고하고 있습니다.',
    noDataTitle: '현재 페이지에 데이터가 없습니다.',
    networkErrorTitle: '네트워크 오류',
    networkErrorSubTitle: '죄송합니다. 네트워크 연결이 끊겼습니다. 네트워크 상태를 확인해주세요!',
  },
  lock: {
    unlock: '클릭하여 잠금해제',
    alert: '잠금 화면 비밀번호 오류',
    backToLogin: '로그인 페이지로',
    entry: '잠금해제',
    placeholder: '잠금 화면 비밀번호 또는 사용자 비밀번호를 입력해주세요',
  },
  login: {
    backSignIn: '돌아가기',
    mobileSignInFormTitle: '휴대폰 로그인',
    qrSignInFormTitle: 'QR 코드 로그인',
    signInFormTitle: '로그인',
    signUpFormTitle: '회원가입',
    forgetFormTitle: '비밀번호 재설정',

    signInTitle: '백스테이지 관리 시스템',
    signInDesc: '개인 정보를 입력하고 시작하세요!',
    policy: '개인정보 처리방침에 동의합니다.',
    scanSign: 'QR 코드를 스캔하여 로그인을 완료하세요',

    loginButton: '로그인',
    registerButton: '회원가입',
    rememberMe: '자동 로그인',
    forgetPassword: '비밀번호 찾기',
    otherSignIn: '다른 로그인 방법으로 로그인',

    // notify
    loginSuccessTitle: '로그인 성공',
    loginSuccessDesc: '환영합니다',

    // placeholder
    accountPlaceholder: '아이디를 입력하세요',
    passwordPlaceholder: '비밀번호를 입력하세요',
    smsPlaceholder: '인증번호를 입력하세요',
    mobilePlaceholder: '휴대폰 번호를 입력하세요',
    policyPlaceholder: '동의 후 회원가입이 가능합니다',
    diffPwd: '비밀번호가 일치하지 않습니다',

    userName: '사용자 이름',
    password: '비밀번호',
    confirmPassword: '비밀번호 확인',
    email: '이메일',
    smsCode: '인증번호',
    mobile: '휴대폰 번호',
  },
};
