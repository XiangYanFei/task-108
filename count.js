// JavaScript Document
function count(){
	var Sumscore=0;
	
	var scoreBlankfill=0;
	var scoreSinglechoice=0;
	var scoreMultiplechoice=0;
	var scoreJudge=0;
	var scoreShortanswer=0;
	
	//填空题
	if(document.getElementById("UML-name").value==='统一建模语言'){
		scoreBlankfill+=5;
	}
	if(document.getElementsByName("trait")[0].value==='封装性'){
		scoreBlankfill+=5;
	}
	if(document.getElementsByName("trait")[1].value==='继承性'){
		scoreBlankfill+=5;
	}
	if(document.getElementsByName("trait")[2].value==='多态性'){
		scoreBlankfill+=5;
	}
	
	//单选题
	if(document.getElementsByName("rad1")[1].checked){
		scoreSinglechoice+=10;	
	}
	if(document.getElementsByName("rad2")[0].checked){
		scoreSinglechoice+=10;
	}

	//多选题
	var check1=document.getElementsByName("check1");
	if(check1[0].checked && check1[1].checked && !check1[2].checked && check1[3].checked)
		{
			scoreMultiplechoice+=10;
		}
	var check2=document.getElementsByName("check2");
	if(check2[0].checked && check2[1].checked && check2[2].checked && !check2[3].checked)
		{
			scoreMultiplechoice+=10;
		}


	//判断题
		if(document.getElementsByName("judge1")[1].checked){
			scoreJudge+=10;
		}
		if(document.getElementsByName("judge2")[0].checked){
			scoreJudge+=10;
		}
	
	//简答题
	if(document.getElementById("short-answer").value==='模型是对现实世界的简化和抽象，模型是对所研究的系统、过程事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。')
		{
			scoreShortanswer+=20;
		}
	
	Sumscore=scoreBlankfill+scoreJudge+scoreMultiplechoice+scoreShortanswer+scoreSinglechoice;
	
	if(document.getElementById("class").value.length>0 && document.getElementById("Stu-num").value.length>0 && document.getElementById("Stu-name").value.length>0){
				alert('您所得分数为：'+Sumscore+'分！');
	  }
	else{
		alert('请完善您的信息！');
	}

}