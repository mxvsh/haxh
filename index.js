var xor = function(a,b) {
  return ( a || b ) && !( a && b );
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

var haxh = function(str) {
	this.len = str.length;
	this.bin_len = this.len.toString(2);
	this.binary = '';
	for(i=0; i<this.len; i++) {
		this.binary += str.charAt(i).charCodeAt(0).toString(2);
	}
	for(i=this.binary.length; i<512; i++) {
		this.binary+='0'
	}
	this.bin_arr = [];
	count=-1;
	for(i=0; i<=512;){
		count++
		this.bin_arr[count] = this.binary.slice(i, i+16);
		i+=32;
	}
	console.log(this.binary.length)
	last_arr = this.bin_arr[count].toString()
	count = last_arr.length-1
	for(i=this.bin_len.length-1; i>=0; i--) {
		last_arr = last_arr.replaceAt(count, this.bin_len.toString().charAt(i))

		count--;
	}
	this.bin_arr[this.bin_arr.length-1] = last_arr

	for(i=0; i<=16;i++) {

	}

}

var t = new haxh('CRYPTO');
// console.log(t.bin_arr);
