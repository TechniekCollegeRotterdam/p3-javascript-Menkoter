
			now = new Date();
			timeDiff = end.getTime() - now.getTime();
			days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
			hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
			seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
			countdownElement.innerHTML = "Nog " + days + " dagen, " + hours + " uur, " + minutes + " minuten en " + seconds + " seconden tot de zomervakantie.";
		}, 1000); // 1000 milliseconden = 1 seconde
	</script>
</body>
</html>
