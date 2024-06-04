function showAlerts() {
    const count = document.getElementById('alertCount').value;
    const numAlerts = parseInt(count, 10);

    if (isNaN(numAlerts) || numAlerts < 1) {
        alert('有効な数値を入力してください。');
        return;
    }

    for (let i = 0; i < numAlerts; i++) {
        alert(`これはアラートメッセージ ${i + 1} です。`);
    }
}