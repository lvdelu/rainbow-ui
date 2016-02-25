import UIChart from "./Chart";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/15
//	
//	author: yonglu.xie
//	
//	description: UIWordCloud Class
//-----------------------------------------------------------------------------------------------
export default class UIWordCloud extends UIChart {
	
	getChartOption(){
		var _self = this;
		var data = [
			{name: "Sam S Club", value: 10000, itemStyle: this.createRandomItemStyle()},
			{name: "Macys", value: 6181, itemStyle: this.createRandomItemStyle()},
			{name: "Amy Schumer", value: 4386, itemStyle: this.createRandomItemStyle()},
			{name: "Jurassic World", value: 4055, itemStyle: this.createRandomItemStyle()},
			{name: "Charter Communications", value: 2467, itemStyle: this.createRandomItemStyle()},
			{name: "Chick Fil A", value: 2244, itemStyle: this.createRandomItemStyle()},
			{name: "Planet Fitness", value: 1898, itemStyle: this.createRandomItemStyle()},
			{name: "Pitch Perfect", value: 1484, itemStyle: this.createRandomItemStyle()},
			{name: "Express", value: 1112, itemStyle: this.createRandomItemStyle()},
			{name: "Home", value: 965, itemStyle: this.createRandomItemStyle()},
			{name: "Johnny Depp", value: 847, itemStyle: this.createRandomItemStyle()},
			{name: "Lena Dunham", value: 582, itemStyle: this.createRandomItemStyle()},
			{name: "Lewis Hamilton", value: 555, itemStyle: this.createRandomItemStyle()},
			{name: "KXAN", value: 550, itemStyle: this.createRandomItemStyle()},
			{name: "Mary Ellen Mark", value: 462, itemStyle: this.createRandomItemStyle()},
			{name: "Farrah Abraham", value: 366, itemStyle: this.createRandomItemStyle()},
			{name: "Rita Ora", value: 360, itemStyle: this.createRandomItemStyle()},
			{name: "Serena Williams", value: 282, itemStyle: this.createRandomItemStyle()},
			{name: "NCAA baseball tournament", value: 273, itemStyle: this.createRandomItemStyle()},
			{name: "Point Break", value: 265, itemStyle: this.createRandomItemStyle()}
		];
	
		return  {
			title: {
				text: "Google Trends",
				link: "http://www.google.com/trends/hottrends"
			},
			tooltip: {
				show: true
			},
			series: [{
				name: "Google Trends",
				type: "wordCloud",
				size: this.props.size,
				textRotation: this.props.textRotation,
				textPadding: 0,
				autoSize: this.props.autoSize,
				data: data
			}]
		};
	}
	
	createRandomItemStyle() {
		return {
			normal: {
				color: 'rgb(' + [
					Math.round(Math.random() * 160),
					Math.round(Math.random() * 160),
					Math.round(Math.random() * 160)
				].join(',') + ')'
			}
		};
	}
	
}

UIWordCloud.propTypes = $.extend({}, UIChart.propTypes, {
	// �ַ�������λ�ã�֧�־���ֵ��px���Ͱٷֱ�
	center: React.PropTypes.array,
	
	// �ַ��ƴ�С��֧�־���ֵ��px���Ͱٷֱ�
	size: React.PropTypes.array,
	
	// ������ת�Ƕȿ�ѡ�б�Ĭ�ϻ������ˮƽ��0���ʹ�ֱ��90������������ѡ�񣬿������ö����ѡ�Ƕȣ����� [0, -45, 45, 90]
	textRotation: React.PropTypes.array,
	
	// �����С�Զ��������ã�Ĭ�Ͽ����Զ����㣬��������ÿ�����ݵ� value ��С�Լ������Ĵ�С���������С�Դﵽ��ѵ���ʾЧ����minSize ����ǿ����С���塣 �رյ�ʱ�������Сȡ itemStyle.normal.textStyle.fontSize�����鿪����
	autoSize: React.PropTypes.object,
	
	//
	itemStyle: React.PropTypes.object,
	
});

UIWordCloud.defaultProps = $.extend({}, UIChart.defaultProps, {
	center: ['50%', '50%'] ,
	size: ['40%', '40%'] ,
	textRotation: [0, 90],
	autoSize: {enable: true, minSize: 12} ,
	itemStyle: {},
});
