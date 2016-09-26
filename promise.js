function setAlarm(time) {
	setTimeout(function () {
		console.log(time / 1000 + "초가 지났습니다.");
	}, time)
}

setAlarm(3500);