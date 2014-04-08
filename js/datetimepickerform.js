/**
 * datetimepicker の設定クラス。
 * 
 */
var DatetimePickerForm = (function() {

	/**
	 * ピッカーのオプション。
	 * 
	 * @type {Object}
	 */
	var option = {
		pickTime: false, // 時分秒はピッカーに表示しない
		language: 'ja', // 言語は日本語
		format: 'YYYY-MM-DD' // フォーマットは YYYY-MM-DD
	};
	
	/**
	 * フォームに datetimepicker の設定を行う。
	 *
	 * private メソッド。
	 * 
	 */
	function setUp() {
		// ピッカーが表示されるように設定
		$('.input-group').datetimepicker(option);
	}

	return {
		/**
		 * フォームに datetimepicker の設定を行う。
		 *
		 */
		init: function() {
			setUp();
		}
	};

})();
