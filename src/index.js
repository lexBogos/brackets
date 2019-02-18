module.exports = function check(str, bracketsConfig) {


let decision = true
let count = 0
let mystr = 0
let a = 0
let b  = 0
let c = 0

let new_str = str
while (str.length>0)

	{
for (q=0; q<bracketsConfig.length; q++)
	{
		bracketsConfig[q]

	c = bracketsConfig[q][0] + bracketsConfig[q][1]


	for (i=0; i < str.length-1; i++ )
		{
		a = str[count]
		b = str[count+1]
		count = count + 1

		if ((a+b) == c)
			{
				str = str.substring(0,count-1)+str.substring(count+1)
			}

		}

	count = 0

	}

	if (str.length==mystr)
		{if (str.length > 0)
			{decision = false
			break}
		else{decision = true
			break}
		}
	mystr=str.length
	}
  return decision
}
