// Calculator logic
(() => {
	const display = document.getElementById('display');
	const keys = Array.from(document.querySelectorAll('.key'));

	let expression = '';

	function updateDisplay() {
		display.textContent = expression === '' ? '0' : expression;
	}

	function append(value) {
		expression += value;
		updateDisplay();
	}

	function clearAll() {
		expression = '';
		updateDisplay();
	}

	function deleteLast() {
		expression = expression.slice(0, -1);
		updateDisplay();
	}

	function safeEvaluate(expr) {
		// Allow only digits, operators, parentheses, decimal and spaces
		if (!/^[0-9+\-*/().\s]+$/.test(expr)) {
			throw new Error('Invalid characters');
		}
		// Replace unicode operators with JS equivalents if present
		const sanitized = expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
		// Use Function constructor for slightly safer eval than global eval
		// Still validate characters above — this is acceptable for a local app
		// eslint-disable-next-line no-new-func
		return Function(`"use strict"; return (${sanitized})`)();
	}

	function calculate() {
		try {
			if (expression.trim() === '') return;
			const result = safeEvaluate(expression);
			expression = String(result);
			updateDisplay();
		} catch (e) {
			expression = 'Error';
			updateDisplay();
			setTimeout(() => { expression = ''; updateDisplay(); }, 1200);
		}
	}

	// Button clicks
	keys.forEach(key => {
		key.addEventListener('click', () => {
			const action = key.dataset.action;
			const value = key.dataset.value;
			if (action === 'clear') {
				clearAll();
			} else if (action === 'delete') {
				deleteLast();
			} else if (action === 'equals') {
				calculate();
			} else if (value !== undefined) {
				append(value);
			}
		});
	});

	// Keyboard support
	window.addEventListener('keydown', (e) => {
		const key = e.key;
		if ((/^[0-9]$/).test(key) || ['+','-','*','/','(',')','.'].includes(key)) {
			append(key);
			e.preventDefault();
			return;
		}
		if (key === 'Enter') { e.preventDefault(); calculate(); return; }
		if (key === 'Backspace') { e.preventDefault(); deleteLast(); return; }
		if (key.toLowerCase() === 'c') { e.preventDefault(); clearAll(); return; }
	});

	// init
	updateDisplay();
})();
