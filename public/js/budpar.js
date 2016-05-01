jQuery(document).ready(function() {
   	/** @auth Matheus
	 * UPPER CASE NO SISTEMA
	 */
	jQuery('input, textarea, select').css('text-transform', 'uppercase');
	jQuery('input, textarea, select').keyup(function(event) {
		this.value = this.value.toUpperCase();
		return event.preventDefault();
	}); 
});