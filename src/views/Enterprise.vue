<template>
	<view class="content">			
		<view class="content-bg">
			
			
			<!-- title -->
			<view class="content-title">
				<view class="content-title_text">一企一档</view>
				<view class="content-title_icon">
					<icons type="close"  color="#000"  size="36rpx"></icons>
				</view>
			</view>
			<!-- title end -->
			
			<!-- content -->
			<view class="content-box" v-for="(item) in list" :key="item.id">
				<view class="content-box_bg">
				
					<view class="content-box_top">
						
						<view class="content-box_top_base">
							
							<view class="content-box_top_base_logo">
								<image class="company_logo" :src="item.companyImg" mode=""></image>
							</view>
							
							<view class="content-box_top_base_msg">
								<view class="company_name">{{item.companyName}}</view>
								<view class="company_other">
									<view class="company_industry">
										<text>产业导向： </text>
										<text> {{item.companyIndustry}} </text>
									</view>
									<view class="company_time">
										<view class="company_time_item">
											<text>场地位置： </text>
											<text> {{item.companyPosition}} </text>
										</view>
										<view class="company_time_item">
											<text>成立时间： </text>
											<text> {{item.companyCreateTime}} </text>
										</view>
										<view class="company_time_item">
											<text>入驻时间： </text>
											<text> {{item.companySetTime}} </text>
										</view>
									</view>
								</view>								
							</view>
							
						</view>
						
						<view class="content-box_top_more">
							
							<view class="company_more_item">
								<image class="company_more_icon" src="/icon_more_1.png" mode="aspectFit"></image>
								<view class="company_more_text">
									<view class="company_more_text_title">企业工商信息</view>
									<view>一键获取工商信息</view>
								</view>
							</view>							
							<view class="company_more_item">
								<image class="company_more_icon" src="/icon_more_2.png" mode="aspectFit"></image>
								<view class="company_more_text">
									<view class="company_more_text_title">企业产值信息</view>
									<view>瞬息掌握发展情况</view>
								</view>
							</view>							
							<view class="company_more_item">
								<image class="company_more_icon" src="/icon_more_3.png" mode="aspectFit"></image>
								<view class="company_more_text">
									<view class="company_more_text_title">企业商品信息</view>
									<view>深层挖掘产品品质</view>
								</view>
							</view>
							
						</view>
						
					</view>
				
				
					<view class="content-box_bottom">
						
						<view class="content-box_bottom_tab">
							<view class="tab_item"  v-for="(item,index) in tabList" :key="index" @click="tabClick">
								{{item}}
							</view>
						</view>
						
						<scroll-view scroll-y="true" style="height: 530px;">
							<view style="height: 100%;">
								
								<view class="content-box_bottom_first">
									<text class="first_title">当前工商信息</text>
									<view class="table">
										<view class="table_top">
											<view class="table_box">
												<view class="table_left_item">
													<view class="item_title">统一社会信用代码</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">工商注册号</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">经营状态</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">法人</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">公司邮箱</view>
													<view class="item_msg">9r8379827</view>
												</view>
											</view>
											<view class="table_box">
												<view class="table_left_item">
													<view class="item_title">组织机构代码</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">公司类型</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">注册资本</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">联系电话</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">登记机关</view>
													<view class="item_msg">9r8379827</view>
												</view>
											</view>
										</view>
										<view class="table_bottom">
											<view class="item_title">经营范围</view>
											<view class="item_msg">9r8379827书法考级不看我的包v可接受的事实</view>
										</view>
									</view>
								</view>
								
								
								<view class="content-box_bottom_first">
									<text class="first_title">当前工商信息</text>
									<view class="table">
										<view class="table_top">
											<view class="table_box">
												<view class="table_left_item">
													<view class="item_title">统一社会信用代码</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">工商注册号</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">经营状态</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">法人</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">公司邮箱</view>
													<view class="item_msg">9r8379827</view>
												</view>
											</view>
											<view class="table_box">
												<view class="table_left_item">
													<view class="item_title">组织机构代码</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">公司类型</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">注册资本</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">联系电话</view>
													<view class="item_msg">9r8379827</view>
												</view>
												<view class="table_left_item">
													<view class="item_title">登记机关</view>
													<view class="item_msg">9r8379827</view>
												</view>
											</view>
										</view>
										<view class="table_bottom">
											<view class="item_title">经营范围</view>
											<view class="item_msg">9r8379827书法考级不看我的包v可接受的事实</view>
										</view>
									</view>
								</view>
								
								
							</view>
						</scroll-view>
						
					</view>
				
				
				</view>		<!-- content-box_bg end -->			
			</view>		<!-- content-box end -->
				
				
		</view>		<!-- content-bg end -->		
	</view>		<!-- content end -->
</template>

<script>
	export default {
		data() {
			return {
				
				list: [
					{
						id: 1,
						companyImg: '/icon_more_2.png',
						companyName: '平湖宏嘉光电科技有限公司',
						companyIndustry: '光机电行业',
						companyPosition: '-',
						companyCreateTime: '2010-11-09',
						companySetTime: '2020-04-14',
					}
				],
				tabList: [
					"企业基础信息","产值纳税信息","企业考核信息","企业风险信息","园企协同信息"
				],
				
			}
		},
		onLoad() {

		},
		methods: {
			tabClick(){
				console.log(1);				
			}
		}
	}
</script>

<style lang="scss">
	page{
		// width: $uni-size-full;
		// height: $uni-size-full;
		display: flex;
		background: url(/bg_content.png) no-repeat center center;
		background-size: 100% 100%; 
		overflow: hidden;
	}
	.content{
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: rgba($color: #232956, $alpha: 0.7);
		
		.content-bg{
			display: flex;
			flex-direction: column;
			width: 70%;
			// height: $uni-size-full;
			
			.content-title{
				// background-color: $uni-bg-color;
				position: relative;
				text-align: center;
				font-weight: bold;
				// font-size: $uni-font-size-lg;
				// line-height: $uni-img-size-lg;
				
				.content-title_text{
					
				}
				
				.content-title_icon{
					position: absolute;
					right: 0;
					top: 0;
					// width: $uni-img-size-lg;
					cursor: pointer;
					
				}
			}
			
			.content-box{
				flex: 1;
				display: flex;
				flex-direction: column;
				// padding: $uni-img-size-sm;
				background: rgba($color: #21305F, $alpha: 0.8);
				
				.content-box_bg{
					// padding: $uni-img-size-sm;
					background: rgba($color: #020D19, $alpha: 0.4);
				}
				
				.content-box_top{
					
					
					.content-box_top_base{
						display: flex;
						justify-content: space-between;
						color: -text-color-inverse;
						
						.content-box_top_base_logo{
							width: 120px;
							height: 120px;
							position: relative;
							background: url(/icon_logo.png) no-repeat center center;
							background-size: 100% 100%;
							
							.company_logo{
								position: absolute;
								top: 15px;
								left: 15px;								
								width: 90px;
								height: 90px;
								background: #97A2E2;
							}
						}
						
						.content-box_top_base_msg{
							flex: 1;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							// padding: 0 $uni-img-size-sm;
							
							.company_name{
								// font-size: $uni-img-size-sm;
							}
							
							.company_other{							
								color: #9BC9DD;								
								
								.company_industry{	
									// margin-bottom: $uni-spacing-col-lg;
								}
								
								.company_time{
									display: flex;
									justify-content: space-between;
									
									.company_time_item{
										width: 33.33%;
									}
								}
							}
						}
					}
					
					.content-box_top_more{
						display: flex;
						justify-content: space-between;						
						// color: $uni-text-color-inverse;
						// margin: $uni-spacing-col-lg 0;
						
						.company_more_item{
							display: flex;
							align-items: center;
							width: 33.33%;
							
							.company_more_icon{
								width: 90px;
								height: 90px;
								flex-shrink: 0;
							}
							
							.company_more_text{
								color: #9BC9DD;
								// margin-left: $uni-spacing-row-sm;
								
								.company_more_text_title{
									// color: $uni-text-color-inverse;
									// font-size: $uni-font-size-lg;
									// margin-bottom: $uni-spacing-row-base;
								}
							}							
						}
					}
					
				}
				
				.content-box_bottom{
					flex: 1;
					
					.content-box_bottom_tab{
						color: #9BC9DD;
						display: flex;
						// font-size: $uni-font-size-lg;
						border-bottom: 2px solid #203852;
						box-sizing: border-box;
						
						.tab_item{
							// padding: $uni-spacing-col-lg 0;
							margin-right: 40px;
						}
						
						.tab_item:first-child{
							// color: $uni-text-color-inverse;
							border-bottom: 2px solid #57B7E0;
							box-sizing: border-box;
						}						
					}
					
					.content-box_bottom_first{
						// padding: $uni-img-size-sm 0;
						
						
						.first_title{
							width: auto;
							// color: $uni-text-color-inverse;
							// padding: $uni-spacing-col-base;
							// padding-right: $uni-spacing-col-lg;
							border-left: 4px solid #00F3F7;
							background-image: linear-gradient(to right, rgba(5,204,207,0.6), rgba(255,0,0,0) );
						}
						
						.table{
							color: #9BC9DD;	
							// margin: $uni-img-size-sm 0;
							border: 2px solid #192C46;
							box-sizing: border-box;
							
							.table_top{
								display: flex;
								align-items: center;
								
								.table_box{
									width: 50%;
									
									.table_left_item{
										display: flex;
										align-items: center;
										border-bottom: 2px solid #192C46;
										
										.item_title{
											width: 330rpx;
											// padding: $uni-spacing-col-lg;
											// padding-left: $uni-img-size-base;
											background: rgba($color: #1C4375, $alpha: 0.4);
										}
										
										.item_msg{
											flex: 1;
											// padding: $uni-spacing-col-lg;
											// padding-left: $uni-img-size-base;
											background: rgba($color: #0B2041, $alpha: 0.6);
										}
									}
								}
							}
							
							.table_bottom{
								display: flex;
								
								.item_title{
									width: 330rpx;
									// padding: $uni-spacing-col-lg;
									// padding-left: $uni-img-size-base;
									background: rgba($color: #1C4375, $alpha: 0.4);
								}
								
								.item_msg{
									flex: 1;
									// padding: $uni-spacing-col-lg;
									// padding-left: $uni-img-size-base;
									background: rgba($color: #0B2041, $alpha: 0.6);
								}
							}							
						}
					}
					
					.content-box_bottom_first:nth-child(2){
						padding: 0;						
					}
				}
			}
			
		}
	}
</style>

