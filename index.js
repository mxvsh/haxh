var arg = process.argv[2];
log=function(s){console.log(s)}
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
	for(i=0; i<512;){
		count++
		this.bin_arr[count] = this.binary.slice(i, i+16);
		i+=32;
	}
	last_arr = this.bin_arr[count].toString()
	count = last_arr.length-1
	for(i=this.bin_len.length-1; i>=0; i--) {
		last_arr = last_arr.replaceAt(count, this.bin_len.toString().charAt(i))

		count--;
	}
	this.bin_arr[this.bin_arr.length-1] = last_arr

	var iMax = 16;
	var jMax = 4;
	this.data = new Array();
	for (i=0; i<iMax; i++) {
	 	this.data[i] = new Array();
 			for (j=0; j<jMax; j++) {
		  	this.data[i][j] = 0;
	 	}
	}
	c=0
	for(k=0;k<16;k++) {
		c=0
		for(i=0; i<16; i+=4) {
			this.data[k][c] = parseInt(this.bin_arr[k].slice(i, i+4)).toString(16);
			c++;
		}
	}
	c=0
	this.e=''
	for(k=0;k<16;k++) {
		c=0
		for(i=0; i<16; i+=4) {
			this.e+= (this.data[k][c]=='0')?'':this.data[k][c];
			c++;
		}
	}
	
}

var t = new haxh(arg);
log(t.e)