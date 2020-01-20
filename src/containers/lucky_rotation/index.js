import React from 'react'
import { bindActionCreators } from 'redux'
import Pagination from "react-js-pagination";
import { connect } from 'react-redux'
import './css/style.css';
import {
	getDetailData,
	getRotationDetailData,
	getRotationDetailDataUser,
	getTuDo,
	getOpenWord,
	getCodeBonus,
	getVinhDanh,
	getCountBonus,
	getReceiveWord,
	openItem,
	exchangeItem
} from '../../modules/lucky'
import {
	getData
} from '../../modules/profile'

import close_icon from './images/close-icon.png';
import backtotop from './images/backtotop.png';
import bg_account from './images/bg-account.png';
import bg_float_left from './images/bg-float-left.png';
import bg_line_napthescoin from './images/bg-line-napthescoin.png'
import bg_page from './images/bg-page.png';
import bg_page_m from './images/bg-page-m.png';
import bg_sukien_dienra from './images/bg-sukien-dienra.png';
import bg_tab_ls from './images/bg-tab-ls.png';
import btn_chudangco from './images/btn-chudangco.png';
import btn_doingay from './images/btn-doingay.png';
import btn_doithuong from './images/btn-doithuong.png';
import btn_hotlinehotro from './images/btn-hotlinehotro.png';
import btn_huongdanmuathescoin from './images/btn-huongdanmuathescoin.png';
import btn_lat10chu from './images/btn-lat10chu.png';
import btn_lattiep from './images/btn-lattiep.png';
import btn_napthescoin from './images/btn-napthescoin.png';
import btn_xemgiaithuong from './images/btn-xemgiaithuong.png';
import btn_xacnhanduoithuong from './images/btn-xacnhanduoithuong.png'
import icon_jsc from './images/icon-jsc.png';
import icon_noti from './images/icon-noti.png';
import img_canh_ty from './images/img-canh-ty.png';
import img_chao_canh_ty from './images/img-chao-canh-ty.png';
import img_chao_don from './images/img-chao-don.png';
import img_chao_don_canh_ty from './images/img-chao-don-canh-ty.png';
import img_chao_don_tet_canh_ty from './images/img-chao-don-tet-canh-ty.png';
import img_doithuong from './images/img-doithuong.png';
import img_don_canh_ty from './images/img-don-canh-ty.png';
import img_mochu from './images/img-mochu.png';
import img_nhanchu from './images/img-nhanchu.png';
import logo from './images/logo.png';
import logo_scoin from './images/logo-scoin.png';
import logo_splay from './images/logo-splay.png';
import logo_vtcmobile from './images/logo-vtcmobile.png';
import menu_float_bottom from './images/menu-float-bottom.png';
import menu_float_bottom_m from './images/menu-float-bottom-m.png';
import mo_1_chu from './images/mo-1-chu.png';
import mo_10_chu from './images/mo-10-chu.png';
import su_kien_dang_dien_ra_con from './images/su-kien-dang-dien-ra-con.png';
import su_kien_sap_dien_ra from './images/su-kien-sap-dien-ra.png';
import su_kien_da_ket_thuc from './images/su-kien-da-ket-thuc.png';
import title_bangvinhdanh from './images/title-bangvinhdanh.png';
import title_giaithuong from './images/title-giaithuong.png';
import title_lichsu from './images/title-lichsu.png';
import title_thele from './images/title-thele.png';



import back from './images/back.png';
import canh from './images/canh.png';
import chao from './images/chao.png';
import don from './images/don.png';
import tet from './images/tet.png';
import ty from './images/ti.png';
import canh_gif from './images/canh.gif';
import chao_gif from './images/chao.gif';
import don_gif from './images/don.gif';
import tet_gif from './images/tet.gif';
import ty_gif from './images/ti.gif';

import ReactResizeDetector from 'react-resize-detector'
// import spin from './images/spin.gif';
import $ from 'jquery';
import 'bootstrap';

import data from './data'
const styles = {
	paper: {
		background: "#fff",
	},
};
var OneSignal = OneSignal || [];

class Lucky_Rotation extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			limit: 10,
			isAll:true,
			stop:true,
			auto: false,
			userTurnSpin:{},
			itemOfUser:[],
			luckySpin:{},
			luckySpinGifts:[],
			luckySpinGift:{},

			turnsFree:0,
			numberWordChange:0,
			max:0,
			luckySpinGiftId: 0,
			scoinPlus:0,
			scoinPlusSuccess:0,
			typeGift:'',
			number_chao:0,
			number_don:0,
			number_tet:0,
			number_canh:0,
			number_ti:0,
			isLogin:false,
			day:'00',
			hour:'00', 
			minute:'00', 
			second:'00',
			itemBonus:{},
			vang_jsc:false,
			isOpenTen:false,
			
			golds:[],

			activeVinhDanh:1,
			listVinhDanh:[],
			countVinhDanh:0,

			activeKey:1,
			listKey:[],
			countKey:0,

			activeRuong:1,
			listRuong:[],
			countRuong:0,

			activeBonus:1,
			listCodeBonus:[],
			countCodeBonus:0,

			dataTuDo:[],
			dataCodeBonus:[],	
			listHistory:[],
			
			listCountBonus:[],
			width:0,
			height:0,

			code:false,
			scoinCard:false,
			inputValue: '',
			noti_mdt:false,
			noti_tudo:false,
			numberPage:3,
			message_status:'',
			data_auto:[],
			isSpin:false,
			closeAuto:true,
			message_error:'',
			server_err:false,
			user:{},
			xacthuc:false,
			img_status: su_kien_sap_dien_ra,
			start:false,
			live:false,
			finish: false,
			turnsBuyInfo:[],
			soinValue:0,
			hideNav:false,
			listChu:[],
			oneWord:'',
			showOneWord:false,
		};
	}
	componentWillMount(){
		window.removeEventListener('scroll', this.handleScroll);
		this.resize()
	}

	componentDidMount(){
		var user = JSON.parse(localStorage.getItem("user"));
		if (user !== null) {
			this.props.getRotationDetailDataUser(user.access_token, 119).then(()=>{
				var data=this.props.dataRotationWithUser;
				if(data!==undefined){
					if(data.status==='01'){
						this.getStatus(data.data.luckySpin);
						var itemOfUser=data.data.itemOfUser;
						var number_chao=0, number_don=0, number_tet=0, number_canh=0, number_ti=0;
						var chao=itemOfUser.map(function(e) { return e.luckySpinItem.keyName; }).indexOf('chao');
						if(chao !==-1){
							number_chao=itemOfUser[chao].quantity
						}
						var don=itemOfUser.map(function(e) { return e.luckySpinItem.keyName; }).indexOf('don');
						if(don !==-1){
							number_don=itemOfUser[don].quantity
						}
						var tet=itemOfUser.map(function(e) { return e.luckySpinItem.keyName; }).indexOf('tet');
						if(tet !==-1){
							number_tet=itemOfUser[tet].quantity
						}
						var canh=itemOfUser.map(function(e) { return e.luckySpinItem.keyName; }).indexOf('canh');
						if(canh !==-1){
							number_canh=itemOfUser[canh].quantity
						}
						var ti=itemOfUser.map(function(e) { return e.luckySpinItem.keyName; }).indexOf('ti');
						if(ti !==-1){
							number_ti=itemOfUser[ti].quantity
						}

						this.setState({userTurnSpin:data.data.userTurnSpin, user:user, itemOfUser:data.data.itemOfUser, luckySpinGifts: data.data.luckySpinGifts, luckySpin:data.data.luckySpin, turnsFree:(data.data.userTurnSpin.turnsFree+data.data.userTurnSpin.turnsBuy), turnsBuyInfo:data.data.userTurnSpin.turnsBuyInfo, isLogin:true, number_chao: number_chao, number_don: number_don, number_tet: number_tet, number_canh:number_canh, number_ti:number_ti})
					}else{
						$('#myModal11').modal('show');
						this.setState({message_error:'Không lấy được dữ liệu người dùng. Vui lòng tải lại trang.'})
					}
				}else{
					// $('#myModal12').modal('show');
					this.setState({server_err:true})
				}
				
			});
		} else {
			this.props.getRotationDetailData(119).then(()=>{
				var data=this.props.dataRotation;
				if(data!==undefined){
					if(data.status==='01'){
						this.getStatus(data.data.luckySpin);
						this.setState({userTurnSpin:data.data.userTurnSpin, itemOfUser:data.data.itemOfUser, luckySpinGifts: data.data.luckySpinGifts, luckySpin:data.data.luckySpin, turnsFree:(data.data.userTurnSpin.turnsFree+data.data.userTurnSpin.turnsBuy), isLogin:false})
					}else{
						$('#myModal11').modal('show');
						this.setState({message_error:'Không lấy được dữ liệu. Vui lòng tải lại trang.'})
					}
				}else{
					// $('#myModal12').modal('show');
					this.setState({server_err:true})
				}
			});
		}
		this.getVinhDanh(1);
		window.addEventListener('scroll', this.handleScroll);
		$("#demo").carousel({interval: 3000});
	}

	componentWillUnmount() {
		// clearInterval(this.state.intervalId);
		this.setState({ auto : !this.state.auto});
	}

	resize() {
		let isMobile = (window.innerWidth <= 760);
		if (isMobile) {
			this.setState({limit:5});
		}else{
			this.setState({limit:10});
		}
	}

	onResize=()=>{
		this.resize()
	}

	getStatus=(luckySpin)=>{
		var start=luckySpin.startDate;
		var end=luckySpin.endDate;
		var time=Date.now();

		if (time < start) {
			this.timeRemain(start)
			this.setState({ img_status: su_kien_sap_dien_ra, message_status:"Sự kiện chưa diễn ra.", start:true});
		}
		if (time > start && time < end) {
			this.timeRemain(end)
			this.setState({ img_status: su_kien_dang_dien_ra_con, live:true});
		}
		if (time > end) {
			this.setState({ img_status: su_kien_da_ket_thuc, message_status:"Sự kiện đã kết thúc.", finish:true});
		}
	}

	handleScroll = (event) => {
		if (document.body.getBoundingClientRect().top < -300){
			$("#button").show();
		}else{
			$("#button").hide();
		}
	}

	loginAction = () => {
		const {server_err}=this.state;
		if(!server_err){
			if (typeof(Storage) !== "undefined") {
				var currentPath = window.location.pathname;
				localStorage.setItem("currentPath", currentPath);
			} else {
				console.log("Trình duyệt không hỗ trợ localStorage");
			}
			window.location.replace(`http://graph.vtcmobile.vn/oauth/authorize?client_id=58306439627cac03c8e4259a87e2e1ca&redirect_uri=${window.location.protocol}//${window.location.host}/login&agencyid=0`)
			// window.location.replace(`http://sandbox.graph.vtcmobile.vn/oauth/authorize?client_id=4e7549789b14693eda4e019faaa0c446&agencyid=0&redirect_uri=${window.location.protocol}//${window.location.host}/`);
		}else{
			$('#myModal12').modal('show');
		}
	}
	logoutAction = () => {
		localStorage.removeItem("user");
		window.location.replace(
			`https://graph.vtcmobile.vn/oauth/authorize?client_id=58306439627cac03c8e4259a87e2e1ca&redirect_uri=${window.location.protocol}//${window.location.host}&action=logout&agencyid=0`,
		);

		// window.location.replace(
		// 	`http://sandbox.graph.vtcmobile.vn/oauth/authorize?client_id=4e7549789b14693eda4e019faaa0c446&redirect_uri=${window.location.protocol}//${window.location.host}&action=logout&agencyid=0`,
		// );
	}


	getDetailData=()=>{
		const {auto}=this.state;
		var user = JSON.parse(localStorage.getItem("user"));
		this.props.getRotationDetailDataUser(user.access_token, 119).then(()=>{
			var data=this.props.dataRotationWithUser;
			if(data!==undefined){
				var turnsFree=data.data.userTurnSpin.turnsFree+data.data.userTurnSpin.turnsBuy;
				if(data.status==='01'){
					var itemOfUser=data.data.itemOfUser;
					var number_chao=0, number_don=0, number_tet=0, number_canh=0, number_ti=0;
					var chao=itemOfUser.map(function(e) { return e.luckySpinItem.keyName; }).indexOf('chao');
					if(chao !==-1){
						number_chao=itemOfUser[chao].quantity
					}
					var don=itemOfUser.map(function(e) { return e.luckySpinItem.keyName; }).indexOf('don');
					if(don !==-1){
						number_don=itemOfUser[don].quantity
					}
					var tet=itemOfUser.map(function(e) { return e.luckySpinItem.keyName; }).indexOf('tet');
					if(tet !==-1){
						number_tet=itemOfUser[tet].quantity
					}
					var canh=itemOfUser.map(function(e) { return e.luckySpinItem.keyName; }).indexOf('canh');
					if(canh !==-1){
						number_canh=itemOfUser[canh].quantity
					}
					var ti=itemOfUser.map(function(e) { return e.luckySpinItem.keyName; }).indexOf('ti');
					if(ti !==-1){
						number_ti=itemOfUser[ti].quantity
					}
					this.setState({turnsFree:turnsFree, number_chao: number_chao, number_don: number_don, number_tet: number_tet, number_canh:number_canh, number_ti:number_ti})
				}else if(data.status ==="04"){
					$('#myModal13').modal('show');
				}else{
					$('#myModal11').modal('show');
					this.setState({message_error:'Lỗi hệ thống. Vui lòng thử lại.'})
				}
			}else{
				$('#myModal12').modal('show');
				this.setState({server_err:true})
			}
		});
	}


	timeRemain=(times)=>{
		var _this=this;
		setInterval(()=>{
			var time=(times-Date.now())/1000;
			if(time>0){
				var day=Math.floor(time/86400) > 9 ? Math.floor(time/86400) : `0${Math.floor(time/86400)}`;
				var hour=Math.floor((time%86400)/3600) > 9 ? Math.floor((time%86400)/3600) : `0${Math.floor((time%86400)/3600)}`;
				var minute=Math.floor(((time%86400)%3600)/60) > 9 ? Math.floor(((time%86400)%3600)/60) : `0${Math.floor(((time%86400)%3600)/60)}`;
				var second=Math.ceil(((time%86400)%3600)%60) > 9 ? Math.ceil(((time%86400)%3600)%60) : `0${Math.ceil(((time%86400)%3600)%60)}`;
				_this.setState({day:day, hour: hour, minute: minute, second:second})
			}
		}, 1000);
	}


	showModalBonus=()=>{
		$('#myModal').modal('show'); 
	}

	hideModalBonus=()=>{
		$('#myModal').modal('hide');
	}

	showModalRules=()=>{
		$('#myModal1').modal('show'); 
	}

	hideModalRules=()=>{
		$('#myModal1').modal('hide');
	}

	showModalTuDo=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		if (user !== null) {
			this.getDataTuDo(user);
			$('#myModal4').modal('hide');
			$('#myModal2').modal('show');
		}else {
			$('#myModal5').modal('show');
		}
	}




	showModalCodeBonus=(pageNumber)=>{
		var user = JSON.parse(localStorage.getItem("user"));
		console.log(user)
		if(user !== null){
			this.getBonus(user, pageNumber)
		}else {
			$('#myModal5').modal('show');
		}
	}

	getBonus=(user, pageNumber)=>{
		const {luckySpin, limit}=this.state;
		this.props.getTuDo(user.access_token, luckySpin.id, limit, (pageNumber-1)).then(()=>{
			var data=this.props.dataTuDo;
			console.log(data)
			if(data!==undefined){
				$("#chucmung").modal("hide");
				if(data.status==='01'){
					$('#lichsu').modal('show');
					this.setState({listCodeBonus:data.data, countCodeBonus:data.totalRecords, noti_tudo:false})
				}else{
					$('#myModal11').modal('show');
					this.setState({message_error:'Chưa tải được dữ liệu. Vui lòng thử lại'})
				}
			}else{
				$('#myModal12').modal('show');
				this.setState({server_err:true})
			}
		});
	}



	getOpenWord=(user, pageNumber)=>{
		const {luckySpin, limit}=this.state;
		// var offsetTuDo=(pageNumber-1)*limit;
		this.props.getOpenWord(user.access_token, luckySpin.id, limit, (pageNumber-1)).then(()=>{
			var data=this.props.dataHistoryOpenWord;
			if(data!==undefined){
				if(data.status==='01'){
					this.setState({listRuong:data.data, countRuong: data.totalRecords})
				}else{
					$('#myModal11').modal('show');
					this.setState({message_error:'Chưa tải được dữ liệu. Vui lòng thử lại'})
				}
			}else{
				$('#myModal12').modal('show');
				this.setState({server_err:true})
			}
		});
	}

	getReceiveWord=(user, pageNumber)=>{
		const {luckySpin, limit}=this.state;
		// var offsetTuDo=(pageNumber-1)*limit;
		this.props.getReceiveWord(user.access_token, luckySpin.id, limit, (pageNumber-1)).then(()=>{
			var data=this.props.dataListReceiveWord;
			if(data!==undefined){
				if(data.status==='01'){
					this.setState({listKey:data.data, countKey: data.totalRecords})
				}else{
					$('#myModal11').modal('show');
					this.setState({message_error:'Chưa tải được dữ liệu. Vui lòng thử lại'})
				}
			}else{
				$('#myModal12').modal('show');
				this.setState({server_err:true})
			}
		});
	}

	getVinhDanh=(pageNumber)=>{
		const {limit}=this.state;
		this.props.getVinhDanh(120, 10, (pageNumber-1)).then(()=>{
			var data=this.props.dataVinhDanh;
			if(data!==undefined){
				if(data.status==='01'){	
					var golds=data.data.golds;
					var scoin=data.data.scoin;
					var len=golds.length;
					var n=8-len;
					var listEmpty=[];
					for (let i = 0; i < n; i++) {
						let obj={date: '...', userName: '- Chưa có -', itemName: '...'}
						listEmpty.push(obj);
					}
					golds=golds.concat(listEmpty)
					this.setState({listVinhDanh:scoin, countVinhDanh: data.totalRecords-len, golds:golds})
				}else{
					$('#myModal11').modal('show');
					this.setState({message_error:'Không lấy được dữ liệu bảng vinh danh.'})
				}
			}else{
				$('#myModal12').modal('show');
				this.setState({server_err:true})
			}
		});
	}

	openGiaiThuong=()=>{
		// var offsetTuDo=(pageNumber-1)*limit;
		this.props.getCountBonus().then(()=>{
			
			var data=this.props.dataCountBonus;
			if(data!==undefined){
				if(data.status==='01'){
					$('#GiaiThuong').modal('show');
					this.setState({listCountBonus:data.data})
				}else{
					$('#myModal11').modal('show');
					this.setState({message_error:'Chưa tải được dữ liệu. Vui lòng thử lại'})
				}
			}else{
				$('#myModal12').modal('show');
				this.setState({server_err:true})
			}
		});
		
	}



	hideModalDetailBonus=()=>{
		$('#myModal4').modal('hide');
	}
	closeServerErr=()=>{
		$('#myModal12').modal('hide');
	}

	closeModal7=()=>{
		$('#myModal7').modal('hide');
	}

	closeModal4=()=>{
		$('#myModal4').modal('hide');
	}


	handlePageChangeRuong=(pageNumber)=> {
		var user = JSON.parse(localStorage.getItem("user"));
		this.setState({activeRuong: pageNumber},()=>{
			this.getOpenWord(user, pageNumber)
		})
	}

	handlePageChangeReceiveWord=(pageNumber)=> {
		var user = JSON.parse(localStorage.getItem("user"));
		this.setState({activeKey: pageNumber},()=>{
			this.getReceiveWord(user, pageNumber)
		})
	}

	handlePageChangeCodeBonus=(pageNumber)=> {
		var user = JSON.parse(localStorage.getItem("user"));
		this.setState({activeBonus: pageNumber},()=>{
			this.getBonus(user, pageNumber)
		})
	}

	handlePageChangeVinhDanh=(pageNumber)=> {
		this.setState({activeVinhDanh: pageNumber},()=>{
			this.getVinhDanh(pageNumber)
		})
	}

	openTabNapScoin=()=> {
		window.open('https://scoin.vn/nap-game', '_blank').focus();
	}

	xacThuc=(url)=> {
		localStorage.removeItem("user");
		document.location.reload(true);
		$('#myModal8').modal('hide');
		window.open(url, '_blank').focus();
	}


	randomItemIndex=()=>{
		// var item = items[Math.floor(Math.random()*items.length)];
	}
	getUsername=(name)=>{
		var len=name.length;
		if(len>10){
		  return name.substring(0,10)+'...'
		}else{
		  return name;
		}
	}
	titleName=(name)=>{
		return 'Xin chào '+name;
	}

	getNameScoin=(name)=>{
		if(name.indexOf('Scoin')!==-1){
			return name.substring(0, name.indexOf('Scoin'))
		}else{
			return name
		}
	}

	subNotification=()=>{
		OneSignal.push(function() {
			OneSignal.init({
			  appId: "9a6784fb-1807-41d5-9400-e5b1fd9a0737",
			  notifyButton: {
				enable: true,
			  },
			  allowLocalhostAsSecureOrigin: true,
			});
		  });
	}

	openPopup1Word=()=>{
		const {turnsFree, start, live, finish}=this.state;
		var user = JSON.parse(localStorage.getItem("user"));
		if (user !== null) {
			if(start){
				$('#myModal11').modal('show');
				this.setState({message_error:'Sự kiện chưa diễn ra.'})
			}
			if(live){
				if(turnsFree>0){
					$('#mo1chu').modal('show');
					this.get1Word();
				}else{
					$('#myModal6').modal('show');
				}
			}
			if(finish){
				$('#myModal11').modal('show');
				this.setState({message_error:'Sự kiện đã kết thúc.'})
			}
		}else{
			$('#myModal5').modal('show');
		}
		
	}

	openPopup10Word=()=>{
		const {turnsFree, start, live, finish}=this.state;
		var user = JSON.parse(localStorage.getItem("user"));
		if (user !== null) {
			if(start){
				$('#myModal11').modal('show');
				this.setState({message_error:'Sự kiện chưa diễn ra.'})
			}
			if(live){
				if(turnsFree>0){
					$('#mo10chu').modal('show');
					this.get10Word();
				}else{
					$('#myModal6').modal('show');
				}
			}
			if(finish){
				$('#myModal11').modal('show');
				this.setState({message_error:'Sự kiện đã kết thúc.'})
			}
			
		}else{
			$('#myModal5').modal('show');
		}
		
	}

	get1Word=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		const words=[{name:'chao', img:chao_gif}, {name:'don', img:don_gif},{name:'canh', img:canh_gif},{name:'ti', img:ty_gif},{name:'tet',img:tet_gif}]
		setTimeout(()=>{
			this.setState({showOneWord:true})
		}, 1000)
		this.props.openItem(119,1, user.access_token).then(()=>{
			var data=this.props.dataOpenItem;
			if(data.status==='01'){
				console.log(data)
				var pos = words.map(function(e) { return e.name; }).indexOf(data.data[0].item.keyName);
				this.setState({oneWord:words[pos].img, showOneWord:false})
				this.getDetailData();
			}
			
		})
		
	}

	get10Word=()=>{

		var user = JSON.parse(localStorage.getItem("user"));
		const words=[{name:'chao', img:chao}, {name:'don', img:don},{name:'canh', img:canh},{name:'ti', img:ty},{name:'tet',img:tet}]
		const word_gif=[{name:'chao', img:chao_gif}, {name:'don', img:don_gif},{name:'canh', img:canh_gif},{name:'ti', img:ty_gif},{name:'tet',img:tet_gif}]
		var listWord=[];
		
		this.props.openItem(119,10, user.access_token).then(()=>{
			var data=this.props.dataOpenItem;
			var k=0;
			var old_pos=0;
			if(data.status==='01'){
				var len= data.data.length;
				this.getDetailData();
				this.setState({isOpenTen:true})
				for (let i = 0; i < len; i++) {
					listWord.push(back)
					this.setState({listChu:listWord})
				}
				var myVar=setInterval(()=>{
					if(len > k){
						var pos = word_gif.map(function(e) { return e.name; }).indexOf(data.data[k].item.keyName);
						var word=word_gif[pos].img;
						listWord[k]=word;
						if(k>0){
							var word_statis=words[old_pos].img;
							listWord[k-1]=word_statis;
						}
						
						this.setState({listChu:listWord})
						k=k+1;
						old_pos=pos
					}else{
						this.setState({isOpenTen:false})
						clearInterval(myVar)
					}
				}, 1000)				
			}
			
		});
	}

	latTiep10Chu=()=>{
		$('#mo10chu').animate({ scrollTop: 0 }, 'slow');
		this.get10Word()
	}

	changePlus=()=>{
		const {numberWordChange, max, scoinPlus, luckySpinGift}=this.state;
		if(numberWordChange <max){
			var scoin=(numberWordChange+1)*(luckySpinGift.value)
			this.setState({numberWordChange:this.state.numberWordChange+1, scoinPlus:scoin})
		}
		
	}
	changeMinus=()=>{
		const {numberWordChange, scoinPlus, luckySpinGift}=this.state;
		if(numberWordChange > 0){
			var scoin=(numberWordChange-1)*(luckySpinGift.value)
			this.setState({numberWordChange:this.state.numberWordChange-1, scoinPlus:scoin})
		}
		
	}

	changeNumberWordMax=()=>{
		const {max, luckySpinGift}=this.state;
		var scoin=max*(luckySpinGift.value)
		this.setState({numberWordChange:max, scoinPlus:scoin})
	}

	openPopupBonus=()=>{
		$("#giaithuong").modal('show');
		$("#thele").modal('hide');
	}

	openExchangeWord=(n)=>{
		const {luckySpinGifts}=this.state;
		var user = JSON.parse(localStorage.getItem("user"));
		var item=luckySpinGifts[n];
		var vang_jsc=false;
		$("#select-word").val(n)
		if(user !== null) {
			if(n==5){
				vang_jsc=true;
			}
			this.setState({max: item.maxQuantity, luckySpinGiftId: item.luckySpinGiftId, luckySpinGift: item,  numberWordChange:0, scoinPlus:0, vang_jsc:vang_jsc},()=>{
				$('#doithuong1').modal('show');
				$("#giaithuong").modal('hide');
			})
		}else{
			$('#myModal5').modal('show');
		}
	

	}

	exchangeWord=()=>{
		const {luckySpinGiftId, numberWordChange,  start, live, finish}=this.state;
		const {dataProfile}=this.props;
		var user = JSON.parse(localStorage.getItem("user"));
		var scoinPlus=luckySpinGiftId.value;
		
		if(start){
			$('#myModal11').modal('show');
			this.setState({message_error:'Sự kiện chưa diễn ra.'})
		}
		if(live){
			// if(dataProfile.phoneNumber !==null){
			// 	this.props.exchangeItem(119,luckySpinGiftId, numberWordChange, user.access_token).then(()=>{
			// 		var data=this.props.dataExchangeItem;
			// 		if(data.status==='01'){
			// 			this.setState({scoinPlus:data.data.value, numberWordChange:0, scoinPlus:scoinPlus},()=>{
			// 				$('#doithuong').modal('hide');
			// 				$('#chucmung').modal('show');
			// 			})
			// 			this.getDetailData();
			// 		}
					
			// 	})
			// }else{
			// 	$('#myModal8').modal('show');
			// }
			if(numberWordChange>0){
				this.props.exchangeItem(119,luckySpinGiftId, numberWordChange, user.access_token).then(()=>{
					var data=this.props.dataExchangeItem;
					if(data.status==='01'){
						console.log(data.data.value)
						this.setState({scoinPlusSuccess:data.data.value, numberWordChange:0, scoinPlus:scoinPlus, typeGift:data.data.typeGift},()=>{
							$('#doithuong1').modal('hide');
							$('#chucmung').modal('show');
						})
						this.getDetailData();
					}
					
				})
			}
		}
		if(finish){
			$('#myModal11').modal('show');
			this.setState({message_error:'Sự kiện đã kết thúc.'})
		}
		
	}

	changeGroupWord=(event)=>{
		const {luckySpinGifts, numberWordChange}=this.state;
		var user = JSON.parse(localStorage.getItem("user"));
		var item=luckySpinGifts[+event.target.value];
		var vang_jsc=false;
		var scoinPlus=numberWordChange * (item.value)
		if(user !== null) {
			if(+event.target.value==5){
				vang_jsc=true;
			}
			this.setState({max: item.maxQuantity,luckySpinGift:item, luckySpinGiftId: item.luckySpinGiftId, numberWordChange: 0, scoinPlus:scoinPlus, vang_jsc:vang_jsc},()=>{
				$('#doithuong1').modal('show');
				$("#giaithuong").modal('hide');
			})
		}else{
			$('#myModal5').modal('show');
		}
		// console.log(event.target.value)
	}

	closeModalOneWord=()=>{
		this.setState({oneWord:''})
	}
	closeModalTenWord=()=>{
		this.setState({listChu:[]})
	}

	openTheLe=()=>{
		$("#thele").modal('show');
	}


	openVinhDanh=()=>{
		$("#bangvinhdanh").modal('show');
		this.getVinhDanh(1)
	}

	// openLichSu=()=>{
	// 	$("#lichsu").modal('show');
	// }

	openPopupNhanChu=()=>{
		$("#myModal6").modal('show');
	}

	numberWithCommas=(x)=> {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}


	render() {
		const {typeGift, scoinPlusSuccess, img_status, golds, isOpenTen, luckySpinGiftId, luckySpinGifts, max, vang_jsc, number_chao, number_don, number_tet, number_canh, number_ti, scoinPlus, numberWordChange, showOneWord, oneWord, listChu, soinValue,listCountBonus, listKey, activeKey, turnsBuyInfo,status_sukien, xacthuc, scoinCard,height, width, dialogLoginOpen, dialogBonus, auto, dialogWarning, textWarning, isLogin, userTurnSpin, day, hour, minute, second, code,numberPage, message_status, data_auto,message_error,
			activeRuong, activeHistory, activeBonus, activeVinhDanh, limit, countCodeBonus, countRuong, countKey, countVinhDanh, listHistory, listCodeBonus, listRuong, listVinhDanh,itemBonus, turnsFree, noti_mdt, noti_tudo, hour_live, minute_live, second_live, user}=this.state;
		const { classes } = this.props;
		const notification_tudo=noti_tudo?(<span className="badge badge-pill badge-danger position-absolute noti-tudo">!</span>):(<span></span>);
		return (
		<div className="main_sk">
			<div id="top" class="container-fluid mx-auto">
				<div class="container position-relative mx-auto text-center">
					<div id="logo" class="logo"><img src={logo} class="img-fluid w-60" /></div>
				</div>
				<div class="row mx-auto container content w-50">
				<div class="col-lg-6 text-right align-top box-left">
					<h2 class="mb-0" style={{textAlign:'center'}}><img src={img_status} class="img-fluid" /></h2>        
					<div class="box-time">
						<div class="row m-0">
							<div class="col-3 display-5 text-white mt-n2 py-1"> {day} </div>
							<div class="col-3 display-5 text-white mt-n2 py-1"> {hour} </div>
							<div class="col-3 display-5 text-white mt-n2 py-1"> {minute} </div>
							<div class="col-3 display-5 text-white mt-n2 py-1"> {second} </div>
						</div>
					</div>
					<div class="day" style={{margin:"5px 0px 10px 0px"}}>
						<div class="row m-0">
							<div class="col-3 font-13 text-white mt-n2 py-1 text-center">Ngày</div>
							<div class="col-3 font-13 text-white mt-n2 py-1 text-center">Giờ</div>
							<div class="col-3 font-13 text-white mt-n2 py-1 text-center">Phút</div>
							<div class="col-3 font-13 text-white mt-n2 py-1 text-center">Giây</div>
						</div>
					</div>
					<div>
						{(isLogin)?(<div class="row">
									<div class="col-6 px-0 bg-acc h6 small py-2 text-center text-white text-nowrap"><span class="font-arial" style={{fontWeight:'bold'}}> {this.getUsername(userTurnSpin.currName)}</span> <a title="Đăng xuất" style={{cursor:"pointer"}} onClick={this.logoutAction}><span class="text-warning font-arial">Đăng xuất</span></a></div>
									<div class="col-6 px-0 bg-acc h6 small py-2 text-center text-white"><a><span class="font-arial">Chữ chưa mở &nbsp;&nbsp; {turnsFree ? this.numberWithCommas(turnsFree) : 0}</span></a></div>
								</div>):(
									<div class="row logout">
								<div class="col-6 px-0 bg-acc h6 small py-2 text-center text-nowrap" style={{cursor:"pointer"}} onClick={this.loginAction}><a title="Đăng nhập"><span class="text-warning font-arial">Đăng nhập</span></a></div>
								</div>
						)}
					</div>
					
					<div class="row mt-2">
						<div class="col-6 px-0 text-center"><a title="Mở 1 chữ" onClick={this.openPopup1Word}><img src={mo_1_chu} class="img-fluid img-shadow" /></a></div>
						<div class="col-6 px-0 text-center"><a title="Mở 10 chữ" onClick={this.openPopup10Word}><img src={mo_10_chu} class="img-fluid img-shadow" /></a></div>
					</div>        
				</div>
				<div class="col-lg-6 text-left"><a title="Đổi thưởng" onClick={this.openPopupBonus} style={{cursor:'pointer'}} ><img src={btn_doithuong} class="img-doithuong img-shadow shake-effect" width="110%"/></a></div>
					
				</div>

				{/* <div class="container d-pc-none pl-5">
					{(isLogin)?(<div class="row col-12">
								<div class="col-6 px-0 bg-acc h6 small py-2 text-center text-white text-nowrap"><span class="font-arial" style={{fontWeight:'bold'}}> {this.getUsername(userTurnSpin.currName)}</span> <a title="Đăng xuất" style={{cursor:"pointer"}} onClick={this.logoutAction}><span class="text-warning font-arial">Đăng xuất</span></a></div>
								<div class="col-6 px-0 bg-acc h6 small py-2 text-center text-white"><a><span class="font-arial">Chữ chưa mở &nbsp;&nbsp; {turnsFree ? turnsFree.toLocaleString() : 0}</span></a></div>
							</div>):(
							<div class="row col-12">
								<div class="col-6 px-0 bg-acc h6 small py-2 text-center text-nowrap" style={{cursor:"pointer", marginLeft:"25%"}} onClick={this.loginAction}><a title="Đăng nhập"><span class="text-warning font-arial">Đăng nhập</span></a></div>
							</div>
					)}
				</div> */}
				
			{/* <!--End container--> */}
				<div class="float-left">
					<ul class="nav flex-column text-float-left">
						<li class="mt-5"><a title="Thể lệ" style={{cursor:"pointer"}} onClick={this.openTheLe}>&nbsp;</a></li>
						<li class="mt-1"><a title="Vinh danh" style={{cursor:"pointer"}} onClick={this.openVinhDanh}>&nbsp;</a></li>
						<li class="mt-1"><a title="Lịch sử" style={{cursor:"pointer"}} onClick={()=>this.showModalCodeBonus(1)}>&nbsp;</a></li>
					</ul>
				</div>
				
			</div>

			<div class="float-bottom centered pt-1 d-mobile-none nhanchu">
				<table class="table table-borderless mt-5">
					<tbody>
					<tr>
						<td width="26%">&nbsp;</td>
						<td width="11%" class="text-center text-white small"> <p class="font-arial" style={{paddingTop:4}}>{number_chao ? this.numberWithCommas(number_chao) : 0}</p> </td>
						<td width="11%" class="text-center text-white small"> <p class="font-arial" style={{paddingTop:4}}>{number_don ? this.numberWithCommas(number_don) : 0}</p> </td>
						<td width="11%" class="text-center text-white small"> <p class="font-arial" style={{paddingTop:4}}>{number_tet ? this.numberWithCommas(number_tet) : 0}</p> </td>
						<td width="11%" class="text-center text-white small"> <p class="font-arial" style={{paddingTop:4}}>{number_canh ? this.numberWithCommas(number_canh) : 0}</p> </td>
						<td width="12%" class="text-center text-white small"> <p class="font-arial" style={{paddingTop:4}}>{number_ti ? this.numberWithCommas(number_ti) : 0}</p> </td>
						<td width="18%" class="text-center p-0"><a title="Nhận chữ" class="d-block" style={{width:"100%", lineHeight: "300%", cursor:'pointer'}} onClick={this.openPopupNhanChu}>&nbsp;</a></td>
					</tr>     
					</tbody>
				</table>
			</div>
			<div class="float-bottom centered pt-1 d-pc-none nhanchu">
				<table class="table table-borderless mt-5">
					<tbody>
					<tr>
						<td width="60px" class="text-center text-white small pl-3 pr-0 pt-4"><p class="font-arial" style={{paddingTop:4}}>{number_chao ? this.numberWithCommas(number_chao) : 0}</p></td>
						<td width="60px" class="text-center text-white small px-0 pt-4"> <p class="font-arial" style={{paddingTop:4}}>{number_don ? this.numberWithCommas(number_don) : 0}</p> </td>
						<td width="60px" class="text-center text-white small px-0 pt-4"> <p class="font-arial" style={{paddingTop:4}}>{number_tet ? this.numberWithCommas(number_tet) : 0}</p> </td>
						<td width="60px" class="text-center text-white small pl-0 pt-4"> <p class="font-arial" style={{paddingTop:4}}>{number_canh ? this.numberWithCommas(number_canh) : 0}</p> </td>
						<td width="60px" class="text-center text-white small pl-0 pt-4"> <p class="font-arial" style={{paddingTop:4}}>{number_ti ? this.numberWithCommas(number_ti) : 0}</p> </td>
						<td width="95px" class="text-center p-0"><a title="Nhận chữ" class="d-block" style={{width:"100%", lineHeight: "300%", cursor:'pointer'}} onClick={this.openPopupNhanChu}  >&nbsp;</a></td>
					</tr>
					</tbody>
				</table>
			</div>

			



			{/* <!-- The Modal Thông báo đăng nhập--> */}
			<div className="modal fade" id="myModal5" style={{zIndex:100010}}>
				<div className="modal-dialog">
					<div className="modal-content popup-phanthuong">
					<div class="modal-header border-bottom-0 p-1">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div className="modal-body">
					<h2 class="font-arial text-brown-shadow text-uppercase text-center pb-0 w-75 mx-auto mt-n5">Thông Báo</h2>
						<div className="mt-2 text-center">              
							<h5 className="font-arial text-thele lead text-center py-3">Xin vui lòng đăng nhập!</h5>
							<button type="button" className="font-arial btn btn-danger mx-auto text-center my-3" onClick={this.loginAction}>Đăng nhập</button>
						</div>       
					</div>

					</div>
				</div>
			</div>


			
			{/* <!-- The Modal báo lỗi--> */}
			<div className="modal fade" id="myModal11" style={{zIndex:100011}}>
				<div className="modal-dialog">
					<div className="modal-content popup-phanthuong">
					<div class="modal-header border-bottom-0 p-1">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>

					{/* <!-- Modal body --> */}
					<div className="modal-body">
						<div className="table-responsive mt-2">              
							<h5 className="font-arial text-thele lead text-center">{message_error}</h5>
						</div>       
					</div>

					</div>
				</div>
			</div>
			<div className="modal fade" id="myModal12">
				<div className="modal-dialog">
					<div className="modal-content popup-phanthuong">

					{/* <!-- Modal Header --> */}
					<div class="modal-header border-bottom-0 p-1">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>

					{/* <!-- Modal body --> */}
					<div className="modal-body">
					<h2 class="font-arial text-brown-shadow text-uppercase text-center pb-0 w-75 mx-auto mt-n5">Thông Báo</h2>
					<h2 class="font-arial text-brown-shadow text-uppercase text-center pb-0 w-75 mx-auto mt-n5">Thông Báo</h2>
						<div className="mt-2 text-center">              
							<h5 className="font-arial text-thele lead text-center">Thông báo bảo trì!</h5>
							<h5 className="font-arial text-thele lead text-center">Hệ thống đang được nâng cấp để tối ưu. Vui lòng quay lại sau 10 phút.</h5>
							<h5 className="font-arial text-thele lead text-center">Xin lỗi vì sự bất tiện này</h5>
							<button type="button" className="font-arial btn btn-danger mx-auto text-center my-3" onClick={this.closeServerErr}>Xác nhận</button>
						</div>       
					</div>

					</div>
				</div>
			</div>

			{/* <!-- The Modal Thông báo hết chữ--> */}

			<div class="modal" id="myModal6" style={{zIndex:10001}}>
				<div class="modal-dialog">
					<div class="modal-content border-yellow">
					<div class="modal-header border-bottom-0 p-1">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body pt-0">
						<h3 class="font-arial font-13" style={{fontWeight:'bold'}}>Bạn muốn nhận thêm Chữ?</h3>
						<p class="font-arial text-brown font-13" style={{margin:"30px 0px"}}>Dùng thẻ Scoin nạp thẳng vào các game do VTC Mobile phát hành <span class="font-arial" style={{fontWeight:'bold'}}>tích lũy đủ 50,000Đ sẽ nhận 1 Chữ.</span></p>
						<div class="bg-line-napthescoin p-3 mx-1">
							<h3 class="font-arial font-13">Thẻ Scoin đã nạp từ ví vào Game: {turnsBuyInfo.scoinTopupCardToGame ? this.numberWithCommas(turnsBuyInfo.scoinTopupCardToGame) : 0}Đ</h3>
							<p class="font-arial font-13 text-danger font-weight-bold mb-0">Nạp thêm {turnsBuyInfo.scoinBalanceRounding ? this.numberWithCommas(turnsBuyInfo.scoinBalanceRounding): 0}Đ bằng thẻ Scoin để nhận 1 Chữ</p>
						</div>
						<div className="img-napthenhanchu">
							<img src={btn_napthescoin} alt="Đóng" class="img-fluid" style={{cursor:"pointer"}} onClick={this.openTabNapScoin}/>
						</div>
						
					</div>

					</div>
				</div>
			</div>



			{/* <!--Begin The Modal Thong bao chuc mung --> */}
			<div class="modal" id="chucmung" style={{zIndex:10006}}>
				<div class="modal-dialog">
					<div class="modal-content border-yellow">
					<div class="modal-header border-bottom-0 p-1">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body text-center pt-0">
						<h2 class="font-arial small text-danger">Chúc mừng {userTurnSpin.currName} đổi thành công</h2>
						{(typeGift==='SCOIN')?(<p>{scoinPlusSuccess} <img src={logo_scoin} alt="Scoin" width="60" /></p>):(<p>{scoinPlusSuccess} chỉ vàng JSC <img src= {icon_jsc} alt="jsc" width="24" /></p>)}
						
						{(typeGift==='SCOIN')?(<p class="font-arial font-13">Scoin đã được cộng trực tiếp vào ví. Vui lòng truy cập <a class="font-arial" href="https://scoin.vn" title="Scoin.vn" target="_blank">Scoin.vn</a> để kiểm tra. <br /><a class="font-arial" title="Lịch sử" onClick={()=>this.getBonus(user,activeBonus)} style={{cursor:"pointer"}}>Xem lịch sử đổi thưởng <span class="text-danger font-arial">tại đây</span></a></p>):(
						<p class="font-arial font-13"><span class="font-arial">Đại diện BTC sẽ liên hệ để hướng dẫn thủ tục nhận thưởng.</span><br></br><span class="font-arial">Vui lòng quay số Hotline <a href="tel:19001104" title="Hotline" target="_blank">1900 1104</a> để được hỗ trợ thêm.</span>. <br /><a class="font-arial" title="Lịch sử" onClick={()=>this.getBonus(user,activeBonus)} style={{cursor:"pointer"}}>Xem lịch sử đổi thưởng <span class="text-danger font-arial">tại đây</span></a></p>)}
						
					</div>

					</div>
				</div>
			</div>

			{/* <!-- The Modal Xác thực sdt--> */}
			<div class="modal" id="myModal8" style={{zIndex:10008}}>
				<div class="modal-dialog">
					<div class="modal-content border-yellow">
					<div class="modal-header border-bottom-0 p-1">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body text-center pt-0">
						<h3 class="font-arial text-danger">Thông Báo</h3>
						<h5 class="font-arial" style={{marginTop:20}}>Tài khoản cần xác thực số điện thoại để đổi thưởng</h5>
						{/* <button type="button" className="btn btn-xacnhan btn-block text-center py-4" onClick={this.exchangeWord}>Xác Thực</button> */}
							{(!xacthuc)?(<button type="button" className="btn btn-xacnhan btn-block text-center py-4" onClick={()=>this.xacThuc('https://scoin.vn/cap-nhat-sdt')}><span class="font-arial" style={{color:'#009999', textDecoration:'underline', fontWeight:'bold'}}>Xác thực SĐT</span></button>):(<div></div>)}
					</div>

					</div>
				</div>
			</div>

				



			{/* <!--Begin The Modal Giai thuong --> */}
			<div class="modal" id="giaithuong" style={{zIndex:10002}}>
				<div class="modal-dialog">
					<div class="modal-content border-yellow">
					<div class="modal-header border-bottom-0 p-1">
						<h4 class="modal-title img-title-popup position-relative"><img src= {title_giaithuong} class="img-fluid" alt="Giải thưởng" /></h4>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body pt-0">
						<h2 class="font-arial small pt-2">Xin chào {userTurnSpin.currName}. Hãy chọn quà để đổi</h2>
						<div class="d-mobile-none">
							<div class="alert border-yellow px-1 py-0"> 
								<table class="table table-borderless mb-0">            
									<tbody>
									<tr>
										<td width="24%" class="px-0"><img src= {img_chao_don} class="img-fluid" alt="" /></td>
										<td width="38%" class="px-0"></td>
										<td width="20%" class="pl-2 pr-0 text-center text-nowrap"><span class="font-arial font-13" style={{fontWeight:'bold'}}>10.000</span> <br/> <img src= {logo_scoin} alt="Scoin" width="48" /></td>
										<td width="18%" class="px-0 text-center"><img src= {btn_doingay} class="img-fluid" style={{cursor:"pointer"}} alt="" onClick={()=>this.openExchangeWord(0)} /><br /><span class="text-danger font-arial font-11">Còn {luckySpinGifts[0] !==undefined ? this.numberWithCommas(luckySpinGifts[0].quantity): 0} giải</span></td>
									</tr>             
									</tbody>
								</table>
							</div>
							<div class="alert border-yellow px-1 py-0">
								<table class="table table-borderless mb-0">            
									<tbody>
									<tr>
										<td width="24%" class="px-0"><img src= {img_canh_ty} class="img-fluid" alt="" /></td>
										<td width="38%" class="px-0"></td>
										<td width="20%" class="pl-2 pr-0 text-center text-nowrap"><span class="font-arial font-13" style={{fontWeight:'bold'}}>20.000</span> <br/> <img src= {logo_scoin} alt="Scoin" width="48" /></td>
										<td width="18%" class="px-0 text-center"><img src= {btn_doingay} class="img-fluid" style={{cursor:"pointer"}} alt="" onClick={()=>this.openExchangeWord(1)} /><br /><span class="text-danger font-arial font-11">Còn {luckySpinGifts[1] !==undefined ?  this.numberWithCommas(luckySpinGifts[1].quantity) : 0} giải</span></td>
									</tr>             
									</tbody>
								</table>
							</div>
							<div class="alert border-yellow px-1 py-0">
								<table class="table table-borderless mb-0">            
									<tbody>
									<tr>
										<td width="35%" class="px-0"><img src= {img_chao_canh_ty} class="img-fluid" alt="" /></td>
										<td width="27%" class="px-0"></td>
										<td width="20%" class="pl-2 pr-0 text-center text-nowrap"><span class="font-arial font-13" style={{fontWeight:'bold'}}>50.000</span> <br/> <img src= {logo_scoin} alt="Scoin" width="48" /></td>
										<td width="18%" class="px-0 text-center"><img src= {btn_doingay} class="img-fluid" style={{cursor:"pointer"}} alt="" onClick={()=>this.openExchangeWord(2)} /><br /><span class="text-danger font-arial font-11">Còn {luckySpinGifts[2] !==undefined ?  this.numberWithCommas(luckySpinGifts[2].quantity) : 0} giải</span></td>
									</tr>             
									</tbody>
								</table>
							</div>
							<div class="alert border-yellow px-1 py-0">
								<table class="table table-borderless mb-0">            
									<tbody>
									<tr>
										<td width="35%" class="px-0"><img src= {img_don_canh_ty} class="img-fluid" alt="" /></td>
										<td width="27%" class="px-0"></td>
										<td width="20%" class="pl-2 pr-0 text-center text-nowrap"><span class="font-arial font-13" style={{fontWeight:'bold'}}>100.000</span> <br/> <img src= {logo_scoin} alt="Scoin" width="48" /></td>
										<td width="18%" class="px-0 text-center"><img src= {btn_doingay} class="img-fluid" style={{cursor:"pointer"}} alt="" onClick={()=>this.openExchangeWord(3)} /><br /><span class="text-danger font-arial font-11">Còn {luckySpinGifts[3] !==undefined ?  this.numberWithCommas(luckySpinGifts[3].quantity) : 0} giải</span></td>
									</tr>             
									</tbody>
								</table>
							</div>
							<div class="alert border-yellow px-1 py-0">
								<table class="table table-borderless mb-0">            
									<tbody>
										<tr>
											<td width="48%" class="px-0"><img src= {img_chao_don_canh_ty} class="img-fluid" alt="" /></td>
											<td width="14%" class="px-0"></td>
											<td width="20%" class="pl-2 pr-0 text-center text-nowrap"><span class="font-arial font-13" style={{fontWeight:'bold'}}>200.000</span> <br/> <img src={logo_scoin} alt="Scoin" width="48" /></td>
											<td width="18%" class="px-0 text-center"><img src={btn_doingay} class="img-fluid" style={{cursor:"pointer"}} alt="" onClick={()=>this.openExchangeWord(4)} /><br /><span class="text-danger font-arial font-11">Còn {luckySpinGifts[4] !==undefined ?  this.numberWithCommas(luckySpinGifts[4].quantity) : 0} giải</span></td>
										</tr>             
									</tbody>
								</table>
							</div>
							<div class="alert border-yellow px-1 py-0">
								<table class="table table-borderless mb-0">            
									<tbody>
										<tr>
											<td width="62%" class="px-0"><img src= {img_chao_don_tet_canh_ty} class="img-fluid" alt="" /></td>
											<td width="20%" class="pl-2 pr-0 text-center text-nowrap"><span class="font-arial font-13" style={{fontWeight:'bold'}}>1 Chỉ vàng SJC</span> <br/> <img src= {icon_jsc} alt="Scoin" width="12" /></td>
											<td width="18%" class="px-0 text-center"><img src= {btn_doingay} class="img-fluid" style={{cursor:"pointer"}} alt="" onClick={()=>this.openExchangeWord(5)} /><br /><span class="text-danger font-arial font-11">Còn {luckySpinGifts[5] !==undefined ?  this.numberWithCommas(luckySpinGifts[5].quantity) : 0} giải</span></td>
										</tr>             
									</tbody>
								</table>
							</div>
						</div>
						<div class="d-pc-none-block">
							<div class="alert border-yellow px-1 py-0 w-100">
							<table class="table table-borderless mb-0">            
								<tbody>
								<tr>
									<td colspan="4" class="px-0 text-center"><img src={img_chao_don} class="img-fluid w-40" alt="" /></td>                  
								</tr>
								<tr>
									<td width="25%"></td>
									<td width="25%" class="pl-2 pr-2 text-center text-nowrap"><span class="font-arial font-13" style={{fontWeight:'bold'}}>10.000</span> <br/> <img src={logo_scoin} alt="Scoin" width="48" /></td>
									<td width="25%" class="px-0 text-center"><img src={btn_doingay} class="img-fluid" style={{cursor:"pointer"}} alt="" onClick={()=>this.openExchangeWord(0)} /><br /><span class="text-danger font-arial font-11 text-center">Còn {luckySpinGifts[0] !==undefined ?  this.numberWithCommas(luckySpinGifts[0].quantity) : 0} giải</span></td>    <td width="25%"></td>                
								</tr>             
								</tbody>
							</table>
							</div>
							<div class="alert border-yellow px-1 py-0">
							<table class="table table-borderless mb-0">            
								<tbody>
								<tr>
									<td colspan="4" class="px-0 text-center"><img src= {img_canh_ty} class="img-fluid w-40" alt="" /></td>                  
								</tr>
								<tr>
									<td width="25%"></td>
									<td width="25%" class="pl-2 pr-2 text-center text-nowrap"><span class="font-arial font-13" style={{fontWeight:'bold'}}>20.000</span> <br/> <img src={logo_scoin} alt="Scoin" width="48" /></td>
									<td width="25%" class="px-0 text-center"><img src={btn_doingay} class="img-fluid"style={{cursor:"pointer"}} alt="" onClick={()=>this.openExchangeWord(1)} /><br /><span class="text-danger font-arial font-11 text-center">Còn {luckySpinGifts[1] !==undefined ?  this.numberWithCommas(luckySpinGifts[1].quantity) : 0} giải</span></td>    <td width="25%"></td>                
								</tr>             
								</tbody>
							</table>
							</div>
							<div class="alert border-yellow px-1 py-0">
							<table class="table table-borderless mb-0">            
								<tbody>
								<tr>
									<td colspan="4" class="px-0 text-center"><img src= {img_chao_canh_ty} class="img-fluid w-60" alt="" /></td>                  
								</tr>
								<tr>
									<td width="25%"></td>
									<td width="25%" class="pl-2 pr-2 text-center text-nowrap"><span class="font-arial font-13" style={{fontWeight:'bold'}}>50.000</span> <br/> <img src={logo_scoin} alt="Scoin" width="48" /></td>
									<td width="25%" class="px-0 text-center"><img src={btn_doingay} class="img-fluid" style={{cursor:"pointer"}} alt="" onClick={()=>this.openExchangeWord(2)} /><br /><span class="text-danger font-arial font-11 text-center">Còn {luckySpinGifts[2] !==undefined ?  this.numberWithCommas(luckySpinGifts[2].quantity) : 0} giải</span></td>    <td width="25%"></td>                
								</tr>             
								</tbody>
							</table>
							</div>
							<div class="alert border-yellow px-1 py-0">
							<table class="table table-borderless mb-0">            
								<tbody>
								<tr>
									<td colspan="4" class="px-0 text-center"><img src= {img_don_canh_ty} class="img-fluid w-60" alt="" /></td>                  
								</tr>
								<tr>
									<td width="25%"></td>
									<td width="25%" class="pl-2 pr-2 text-center text-nowrap"><span class="font-arial font-13" style={{fontWeight:'bold'}}>100.000</span> <br/> <img src={logo_scoin} alt="Scoin" width="48" /></td>
									<td width="25%" class="px-0 text-center"><img src={btn_doingay} class="img-fluid" style={{cursor:"pointer"}} alt="" onClick={()=>this.openExchangeWord(3)} /><br /><span class="text-danger font-arial font-11 text-center">Còn {luckySpinGifts[3] !==undefined ?  this.numberWithCommas(luckySpinGifts[3].quantity) : 0} giải</span></td>    <td width="25%"></td>                
								</tr>             
								</tbody>
							</table>
							</div>
							<div class="alert border-yellow px-1 py-0">
							<table class="table table-borderless mb-0">            
								<tbody>
								<tr>
									<td colspan="4" class="px-0 text-center"><img src= {img_chao_don_canh_ty} class="img-fluid w-85" alt="" /></td>                  
								</tr>
								<tr>
									<td width="25%"></td>
									<td width="25%" class="pl-2 pr-2 text-center text-nowrap"><span class="font-arial font-13" style={{fontWeight:'bold'}}>200.000</span> <br/> <img src={logo_scoin} alt="Scoin" width="48" /></td>
									<td width="25%" class="px-0 text-center"><img src={btn_doingay} class="img-fluid" style={{cursor:"pointer"}} alt="" onClick={()=>this.openExchangeWord(4)} /><br /><span class="text-danger font-arial font-11 text-center">Còn {luckySpinGifts[4] !==undefined ?  this.numberWithCommas(luckySpinGifts[4].quantity) : 0} giải</span></td>    <td width="25%"></td>                
								</tr>             
								</tbody>
							</table>
							</div>
							<div class="alert border-yellow px-1 py-0">
							<table class="table table-borderless mb-0">            
								<tbody>
								<tr>
									<td colspan="4" class="px-0 text-center"><img src= {img_chao_don_tet_canh_ty} class="img-fluid" alt="" /></td>                  
								</tr>
								<tr>
									<td width="17%"></td>
									<td width="25%" class="pl-2 pr-2 text-center text-nowrap"><span class="font-arial font-13" style={{fontWeight:'bold'}}>1 Chỉ vàng SJC</span> <br/> <img src= {icon_jsc} alt="Scoin" width="12" /></td>
									<td width="34%" class="px-0 text-center"><img src={btn_doingay} class="img-fluid" style={{cursor:"pointer"}} alt="" onClick={()=>this.openExchangeWord(5)} /><br /><span class="text-danger font-arial font-11 text-center">Còn {luckySpinGifts[5] !==undefined ?  this.numberWithCommas(luckySpinGifts[5].quantity) : 0} giải</span></td>    <td width="25%"></td>                
								</tr>             
								</tbody>
							</table>
							</div>
						</div>
						<h3 class="font-arial text-uppercase font-13">Quy tắc đổi thưởng:</h3>
						<p class="font-arial font-13">- Tài khoản cần xác thực số điện thoại để đổi thưởng. <a class="font-arial" href="https://scoin.vn/doi-sdt" title="Xác thực" target="_blank">Xác thực tại đây</a><br />
				- Quà Scoin sau khi đổi thành công được cộng trực tiếp vào ví Scoin.<br />
				- Quà 1 Chỉ vàng SJC 9999 sau khi thực hiện đổi thành công sẽ được hướng dẫn thủ tục nhận thưởng.</p>
						<h3 class="font-arial text-uppercase font-13 text-danger">Lưu ý:</h3>
						<p class="font-arial font-13">- Mọi hành vi gian lận/ hack sẽ bị xử lý theo pháp luận hiện hành.<br />
				- Các thắc mắc liên quan đến sự kiện vui lòng quay số Hotline 1900 1104.<br />
				- Quyết định cuối cùng thuộc về BTC.</p>
					</div>

					</div>
				</div>
			</div>
			{/* <!--End The Modal Giai thuong --> */}

			{/* <!--Begin The Modal Lich su --> */}
			<div class="modal" id="lichsu">
				<div class="modal-dialog">
					<div class="modal-content border-yellow">
					<div class="modal-header border-bottom-0 p-1">
						<h4 class="modal-title img-title-popup position-relative"><img src= {title_lichsu} class="img-fluid" alt="Lịch sử" /></h4>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body pt-0">
						<div class="">
							<ul class="nav nav-pills nav-justified pop-custom">
							<li class="nav-item">
								<a class="font-arial nav-link active px-2" data-toggle="tab" href="#doithuong" onClick={()=>this.getBonus(user,activeBonus)}>ĐỔI THƯỞNG</a>
							</li>
							<li class="nav-item">
								<a class="font-arial nav-link px-2" data-toggle="tab" href="#mochu" onClick={()=>this.getOpenWord(user,activeRuong)}>MỞ CHỮ</a>
							</li>
							<li class="nav-item">
								<a class="font-arial nav-link px-2" data-toggle="tab" href="#nhanchu" onClick={()=>this.getReceiveWord(user,activeKey)}>NHẬN CHỮ</a>
							</li>
							</ul>            
							<div class="tab-content">
							<div class="tab-pane container active" id="doithuong">
								<div class="pt-3">
									<table class="table mx-auto text-center">
										<thead class="font-weight-bold">
										<tr>
											<th><p class="card-text font-arial">Thời gian đổi</p></th>
											<th><p class="card-text font-arial">Tên giải thưởng</p></th>
										</tr>
										</thead>
										<tbody>
											{listCodeBonus.map((obj, key) => (
												<tr key={key}>
													<td className="border-left-0"><p class="font-arial font-13">{obj.date}</p></td>
													<td className="border-left-0 border-right-0"><p class="font-arial font-13">{obj.itemName}</p></td>
												</tr>
											))}
										</tbody>
									</table>
									<ul class="pagination justify-content-center pag-custom mt-4">
										<Pagination
											activePage={activeBonus}
											itemsCountPerPage={10}
											totalItemsCount={countCodeBonus}
											pageRangeDisplayed={numberPage}
											lastPageText={'Trang cuối'}
											firstPageText={'Trang đầu'}
											itemClass={"page-item"}
											linkClass={"page-link"}
											onChange={(v) => this.handlePageChangeCodeBonus(v)}
										/>
									</ul> 
								</div>                 
							</div>
							<div class="tab-pane container fade" id="mochu">
								<div class="pt-3">
									<table class="table mx-auto text-center">
										<thead class="font-weight-bold">
										<tr>
											<th><p class="card-text font-arial">Thời gian mở</p></th>
											<th><p class="card-text font-arial">Chữ</p></th>
										</tr>
										</thead>
										<tbody>
											{listRuong.map((obj, key) => (
												<tr key={key}>
													<td className="border-left-0"><p class="font-arial font-13">{obj.date}</p></td>
													<td className="border-left-0 border-right-0"><p class="font-arial font-13">{obj.item_name}</p></td>
												</tr>
											))}
										</tbody>
									</table>
									<ul class="pagination justify-content-center pag-custom mt-4">
										<Pagination
											activePage={activeRuong}
											itemsCountPerPage={10}
											totalItemsCount={countRuong}
											pageRangeDisplayed={numberPage}
											lastPageText={'Trang cuối'}
											firstPageText={'Trang đầu'}
											itemClass={"page-item"}
											linkClass={"page-link"}
											onChange={(v) => this.handlePageChangeRuong(v)}
										/>
									</ul> 
								</div>                
							</div>
							<div class="tab-pane container fade" id="nhanchu">
								<div class="pt-3">
									<table class="table mx-auto text-center">
										<thead class="font-weight-bold">
										<tr>
											<th><p class="card-text font-arial">Thời gian</p></th>
											<th><p class="card-text font-arial">Số lượng</p></th>
											<th><p class="card-text font-arial">Nguồn</p></th>
										</tr>
										</thead>
										<tbody>
											{listKey.map((obj, key) => (
												<tr key={key}>
													<td className="border-right-0"><p class="font-arial font-13">{obj.date}</p></td>
													<td className="border-right-0"><p class="font-arial font-13">{obj.receivedTurn}</p></td>
													<td className="border-left-0"><p class="font-arial font-13">{obj.sourceTurn}</p></td>
												</tr>
											))}
										</tbody>
									</table>
									<ul class="pagination justify-content-center pag-custom mt-4">
										<Pagination
											activePage={activeKey}
											itemsCountPerPage={10}
											totalItemsCount={countKey}
											pageRangeDisplayed={numberPage}
											lastPageText={'Trang cuối'}
											firstPageText={'Trang đầu'}
											itemClass={"page-item"}
											linkClass={"page-link"}
											onChange={(v) => this.handlePageChangeKey(v)}
										/>
									</ul> 
								</div>                
							</div>
							</div>
						</div>
						
					</div>

					</div>
				</div>
			</div>
			{/* <!--End The Modal Lich su --> */}

			{/* <!--Begin The Modal The le --> */}
			<div class="modal" id="thele" style={{zIndex:10001}}>
				<div class="modal-dialog">
					<div class="modal-content border-yellow">
					<div class="modal-header border-bottom-0 p-1">
						<h4 class="modal-title img-title-popup position-relative"><img src= {title_thele} class="img-fluid" alt="Thể lệ" /></h4>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body pt-0">
						<h3 class="font-arial font-13 font-weight-bold">1. Đối tượng tham gia</h3>
						<p class="font-arial font-13">Khách hàng có tài khoản Scoin. Nếu chưa có <a class="font-arial text-danger" href="http://scoin.vn/" title="Đang ký" target="_blank">Đăng ký tại đây</a></p>
						<h3 class="font-arial font-13 font-weight-bold">2. Làm thế nào để nhận chữ?</h3>
						<p class="font-arial font-13">Rất đơn giản, chỉ cần dùng thẻ Scoin nạp thẳng vào các game do VTC Mobile phát hành
				Tích lũy đủ 50,000Đ sẽ nhận 1 Chữ.</p>
						<div class="row bg-line-napthescoin p-3 mx-1">          
						<div class="col-sm-8">
							<h3 class="font-arial font-13">Thẻ Scoin đã nạp vào Game: {turnsBuyInfo.scoinTopupCardToGame ? this.numberWithCommas(turnsBuyInfo.scoinTopupCardToGame) : 0}Đ</h3>
							<p class="font-arial font-13 text-danger font-weight-bold mb-0">Nạp thêm {turnsBuyInfo.scoinBalanceRounding ? this.numberWithCommas(turnsBuyInfo.scoinBalanceRounding): 0}Đ bằng thẻ Scoin để nhận 1 Chữ</p>
						</div>
						<div class="col-sm-4 text-center"><a href="https://scoin.vn/nap-game" title="Hướng dẫn mua thẻ Scoin" target="_blank"><img src= {btn_napthescoin} alt="Nạp thẻ scoin" class="img-fluid" style={{marginLeft:20}} width="120" /></a></div>
						</div>
						<div class="row p-3">          
						<div class="col-sm-8 px-0">
							<h3 class="font-arial font-13 font-weight-bold">3. Cơ cấu giải thưởng</h3>
						</div>
						<div class="col-sm-4 text-center px-0"><img src= {btn_xemgiaithuong} alt="Xem giải thưởng" class="img-fluid" width="120" onClick={this.openPopupBonus} /></div>
						</div>
						<div class="row p-3">          
						<div class="col-sm-6 text-center pt-1">
							<a href="https://daily.scoin.vn/huong-dan-mua-the/" title="Hướng dẫn mua thẻ Scoin" target="_blank"><img src= {btn_huongdanmuathescoin} alt="Hướng dẫn mua thẻ Scoin" class="img-fluid" width="279" /></a>
						</div>
						<div class="col-sm-6 text-center pt-1"><a href="tel:19001104" title="Hotline" target="_blank"><img src= {btn_hotlinehotro} alt="Hotline" class="img-fluid" width="279" /></a></div>
						</div>
					</div>
						
					</div>
				</div>
			</div>
			{/* <!--End The Modal The le --> */}

			{/* <!--Begin The Modal Bang vinh danh --> */}
			<div class="modal" id="bangvinhdanh">
				<div class="modal-dialog">
					<div class="modal-content border-yellow">
					<div class="modal-header border-bottom-0 p-1">
						<h4 class="modal-title img-title-popup position-relative"><img src= {title_bangvinhdanh} class="img-fluid" alt="Bảng vinh danh" /></h4>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body pt-0">
						<h3 class="font-arial font-weight-bold text-uppercase text-center pt-3" ><span class="font-arial" style={{ fontSize:'1rem'}}>8 Giải Vàng JSC 9999</span></h3>
						<div class="row border-yellow m-2 p-1 bg-orange text-white border-radius-8 text-center">
							{golds.map((obj, key) => (
												<div class="col-sm-6" key={key}>
													<div class="row justify-content-center">
														<div class="col-6 font-arial"> {obj.userName} </div>
													</div>
												</div>
											))}
						</div>
						<h3 class="font-arial font-13 font-weight-bold text-uppercase text-center pt-3" ><span class="font-arial" style={{ fontSize:'1rem'}}>Các Giải Khác</span></h3>
						<table class="table mx-auto text-center">
							<thead class="font-weight-bold">
							<tr>
								<th><p class="card-text font-arial">Tên</p></th>
								<th><p class="card-text font-arial">Giải thưởng</p></th>
								<th><p class="card-text font-arial">Thời gian đổi</p></th>             
							</tr>
							</thead>
							<tbody>
								{listVinhDanh.map((obj, key) => (
									<tr key={key}>
										<td className="border-right-0"><p class="font-arial font-13">{obj.userName}</p></td>
										<td className="border-left-0 border-right-0"><p class="font-arial font-13">{obj.itemName}</p></td>
										<td className="border-left-0"><p class="font-arial font-13">{obj.date}</p></td>
									</tr>
								))}
							</tbody>
						</table>
						<ul class="pagination justify-content-center pag-custom mt-4">
							<Pagination
								activePage={activeVinhDanh}
								itemsCountPerPage={10}
								totalItemsCount={countVinhDanh}
								pageRangeDisplayed={numberPage}
								lastPageText={'Trang cuối'}
								firstPageText={'Trang đầu'}
								itemClass={"page-item"}
								linkClass={"page-link"}
								onChange={(v) => this.handlePageChangeVinhDanh(v)}
							/>
						</ul>       
					</div>

					</div>
				</div>
			</div>
			{/* <!--End The Modal Bang vinh danh --> */}

			{/* <!--Begin The Modal Mo 1 chu --> */}
			<div class="modal fade in" id="mo1chu" data-keyboard="false" data-backdrop="static">
				<div class="modal-dialog">
					<div class="modal-content bg-transparent">
					<div class="modal-body pt-0 text-center">
						{/* <p><img src= {tet} class="img-fluid text-center" alt="Tết" /></p> */}
						{(showOneWord)?(<img src={oneWord} class="img-fluid" style={{margin:5}} />):(
							<img src={back} class="img-fluid" style={{margin:5}} />
						)}
						<p><a title="Lật tiếp"><img src= {btn_lattiep} class="img-fluid text-center" alt="Lật tiếp"  onClick={this.get1Word} /></a></p>
						<p><a class="text-danger text-center font-arial" style={{cursor:"pointer"}} data-dismiss="modal" onClick={this.closeModalOneWord}>Đóng</a></p>   
					</div>

					</div>
				</div> 
			</div>
			{/* <!--End The Modal Mo 1 chu --> */}

			{/* <!--Begin The Modal Mo 10 chu --> */}
			<div class="modal fade in" id="mo10chu" data-keyboard="false" data-backdrop="static">
				<div class="modal-dialog">
					<div class="modal-content bg-transparent">
						<div class="modal-body pt-0 text-center">
							{listChu.map((obj, key)=>{
								return(
									<div key={key} style={{float:'left'}} className="div-img-word">
										<img src={obj} class="img-fluid" style={{margin:5}} className="img-word" />
									</div>
								)
								
							})}
							{/* <p><img src={tet} class="img-fluid text-center" alt="Tết" /></p> */}
							{(isOpenTen) ? (<p><a title="Lật 10 chữ"><img src= {btn_lat10chu} class="img-fluid text-center" style={{opacity :"0.7"}} alt="Lật 10 chứ" /></a></p>) : (<p><a title="Lật 10 chữ"><img src= {btn_lat10chu} class="img-fluid text-center" style={{cursor:"pointer"}} alt="Lật 10 chứ" onClick={this.latTiep10Chu} /></a></p>)}
							{(isOpenTen) ? (<p><a class="text-danger text-center font-arial" style={{opacity :"0.7"}}>Đóng</a></p>) : (<p><a class="text-danger text-center font-arial" style={{cursor:"pointer"}} data-dismiss="modal" onClick={this.closeModalTenWord}>Đóng</a></p>   )}
							
						</div>
					</div>
				</div>
			</div>
			{/* <!--End The Modal Mo 10 chu --> */}

			{/* <!--Begin The Modal Xac nhan doi thuong 1 --> */}
			<div class="modal" id="doithuong1" style={{zIndex:10005}}>
				<div class="modal-dialog">
					<div class="modal-content border-yellow">
					<div class="modal-header border-bottom-0 p-1">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body pt-0">
						<h3 class="font-arial font-13 font-weight-bold">Xác nhận ghép đổi thưởng như sau</h3>
						<form>
						<select id="select-word" name="ghepchu" class="custom-select" onChange={this.changeGroupWord}>
							<option value="0" selected>CHÀO + ĐÓN</option>
							<option value="1">CANH + TÝ</option>
							<option value="2">CHÀO + CANH + TÝ</option>
							<option value="3">ĐÓN + CANH + TÍ</option>
							<option value="4">CHÀO + ĐÓN + CANH + TÍ</option>
							<option value="5">CHÀO + ĐÓN + TẾT + CANH + TÍ</option>
						</select>
						</form> 
						<div class="row mt-3">
							<div class="col-sm-3 py-1"><h3 class="font-arial font-13 font-weight-bold">Số lượng giải thưởng cần đổi:</h3></div>
							<div class="input-group col-sm-4 py-1" style={{justifyContent:'center'}}>
							<input type="button" value="-" class="font-arial button-minus form-control-sm" data-field="quantity"  onClick={this.changeMinus} />
							<span class="font-arial quantity-field form-control-sm" style={{width: 50, textAlign:'center'}}>{numberWordChange}</span>
							<input type="button" value="+" class="font-arial button-plus form-control-sm" data-field="quantity" onClick={this.changePlus} />
							</div>
							<div class="col-sm-3 py-1" style={{textAlign:"center"}}><button type="button" class="font-arial btn btn-warning"  onClick={this.changeNumberWordMax}>Max</button></div>
						</div>
						{(vang_jsc)?(<p class="font-arial text-center py-3">Nhận được: {scoinPlus ? this.numberWithCommas(scoinPlus) : 0} chỉ vàng JSC <img src= {icon_jsc} alt="jsc" width="12" /></p>):(
						<p class="font-arial text-center py-3">Nhận được: {scoinPlus ? this.numberWithCommas(scoinPlus) : 0} <img src= {logo_scoin} alt="Scoin" width="48" /></p>)}
						{(numberWordChange >max)?(<p class="font-arial small text-danger text-center">Không đủ chữ để nhận giải thưởng này</p>):(<div></div>)}
						<p class="text-center"><a title="Xác nhận đổi" onClick={this.exchangeWord}><img src= {btn_xacnhanduoithuong} class="img-fluid" style={{cursor:"pointer"}} alt="Xác nhận" /></a></p>
						
					</div>

					</div>
				</div>
			</div>
{/* <!--End The Modal Xac nhan doi thuong 1 --> */}


			<ReactResizeDetector handleWidth={true} handleHeight={true} onResize={this.onResize} />


		</div>)
	}
}

const mapStateToProps = state => ({
	dataProfile: state.profile.data,
	dataOpenItem:state.lucky.dataOpenItem,
	dataExchangeItem:state.lucky.dataExchangeItem,
	dataRotation:state.lucky.dataRotation,
	dataRotationWithUser:state.lucky.dataRotationWithUser,
	dataPick: state.lucky.dataPick,
	dataDetail: state.lucky.dataDetail,
	dataTurn: state.lucky.dataTurn,
	dataTuDo: state.lucky.dataTuDo,
	dataListReceiveWord: state.lucky.dataListReceiveWord,
	dataCountBonus:state.lucky.dataCountBonus,
	dataHistoryOpenWord: state.lucky.dataHistoryOpenWord,
	dataVinhDanh: state.lucky.dataVinhDanh,
	dataCodeBonus: state.lucky.dataCodeBonus,
	server:state.server.serverError,
	waiting: state.lucky.waiting,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	getDetailData,
	getRotationDetailData,
	getRotationDetailDataUser,
	getCountBonus,
	getOpenWord,
	getData,
	getTuDo,
	getCodeBonus,
	getVinhDanh,
	getReceiveWord,
	exchangeItem,
	openItem
}, dispatch)


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Lucky_Rotation)