    var map = new BMapGL.Map('container1'); // 创建Map实例
    var map2 = new BMap.Map('container2'); // 创建Map实例
    //武康路
    var x = 121.445628; //lng 经度
    var y = 31.219707; //lnt 纬度

    map.centerAndZoom(new BMapGL.Point(x, y), 15); // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

    map2.centerAndZoom(new BMap.Point(x, y), 15); // 初始化地图,设置中心点坐标和地图级别
    map2.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放


    //武康路->外滩·外白渡桥·东方明珠->南京路->多伦多路·愚园路·思南路·衡山路->城隍庙->老弄堂->M50创意园->田子坊->甜爱路

    // 创建点标记
    var p1 = new BMap.Point(121.445628, 31.219707); //武康路
    var p2 = new BMap.Point(121.455795, 31.254456); //M50创意园

    var p3 = new BMap.Point(121.497204, 31.243453); //外滩
    var p4 = new BMap.Point(121.49692, 31.249653); //外白渡桥
    var p5 = new BMap.Point(121.506379, 31.245414); //东方明珠
    var p6 = new BMap.Point(121.499045, 31.231392); //城隍庙

    var p7 = new BMap.Point(121.466656, 31.227591); //老弄堂
    var p8 = new BMap.Point(121.490599, 31.274022); //甜爱路
    var p9 = new BMap.Point(121.491127, 31.243487); //南京路
    var p10 = new BMap.Point(121.515216, 31.309366); //大学路


    var marker1 = new BMapGL.Marker(p1); //武康路
    var marker11 = new BMapGL.Marker(p1); //武康路
    var marker2 = new BMapGL.Marker(p2); //M50创意园
    var marker22 = new BMapGL.Marker(p2); //M50创意园
    var marker3 = new BMapGL.Marker(p3); //外滩
    var marker33 = new BMapGL.Marker(p3); //外滩
    var marker4 = new BMapGL.Marker(p4); //外白渡桥
    var marker44 = new BMapGL.Marker(p4); //外白渡桥
    var marker5 = new BMapGL.Marker(p5); //东方明珠
    var marker55 = new BMapGL.Marker(p5); //东方明珠
    var marker6 = new BMapGL.Marker(p6); //城隍庙
    var marker66 = new BMapGL.Marker(p6); //城隍庙
    var marker7 = new BMapGL.Marker(p7); //老弄堂
    var marker77 = new BMapGL.Marker(p7); //老弄堂
    var marker8 = new BMapGL.Marker(p8); //甜爱路
    var marker88 = new BMapGL.Marker(p8); //甜爱路
    var marker9 = new BMapGL.Marker(p9); //南京路
    var marker99 = new BMapGL.Marker(p9); //南京路
    var marker10 = new BMapGL.Marker(p10); //大学路
    var marker1010 = new BMapGL.Marker(p10); //大学路

//    在地图上添加点标记
    map.addOverlay(marker1);
    var opts1 = {
        width: 200,
        height: 100,
        title: '武康路',
    };
    var infoWindow1 = new BMapGL.InfoWindow('地址：上海市徐汇区', opts1);
    marker1.addEventListener('click', function () {
        map.openInfoWindow(infoWindow1, p1);
    });

    map.addOverlay(marker2);
    var opts2 = {
        width: 200,
        height: 100,
        title: 'M50创意园'
    };
    var infoWindow2 = new BMapGL.InfoWindow('地址：', opts2);
    marker2.addEventListener('click', function () {
        map.openInfoWindow(infoWindow2, p2);
    });

    map.addOverlay(marker3);
    var opts3 = {
        width: 200,
        height: 100,
        title: '外滩'
    };
    var infoWindow3 = new BMapGL.InfoWindow('地址：', opts3);
    marker3.addEventListener('click', function () {
        map.openInfoWindow(infoWindow3, p3);
    });

    map.addOverlay(marker4);
    var opts4 = {
        width: 200,
        height: 100,
        title: '外白渡桥'
    };
    var infoWindow4 = new BMapGL.InfoWindow('地址：', opts4);
    marker4.addEventListener('click', function () {
        map.openInfoWindow(infoWindow4, p4);
    });

    map.addOverlay(marker5);
    var opts5 = {
        width: 200,
        height: 100,
        title: '东方明珠'
    };
    var infoWindow5 = new BMapGL.InfoWindow('地址：', opts5);
    marker5.addEventListener('click', function () {
        map.openInfoWindow(infoWindow5, p5);
    });

    map.addOverlay(marker6);
    var opts6 = {
        width: 200,
        height: 100,
        title: '城隍庙'
    };
    var infoWindow6 = new BMapGL.InfoWindow('地址：', opts6);
    marker6.addEventListener('click', function () {
        map.openInfoWindow(infoWindow6, p6);
    });

    map.addOverlay(marker7);
    var opts7 = {
        width: 200,
        height: 100,
        title: '老弄堂'
    };
    var infoWindow7 = new BMapGL.InfoWindow('地址：', opts7);
    marker7.addEventListener('click', function () {
        map.openInfoWindow(infoWindow7, p7);
    });

    map.addOverlay(marker8);
    var opts8 = {
        width: 200,
        height: 100,
        title: '甜爱路'
    };
    var infoWindow8 = new BMapGL.InfoWindow('地址：', opts8);
    marker8.addEventListener('click', function () {
        map.openInfoWindow(infoWindow8, p8);
    });

    map.addOverlay(marker9);
    var opts9 = {
        width: 200,
        height: 100,
        title: '南京路'
    };
    var infoWindow9 = new BMapGL.InfoWindow('地址：', opts9);
    marker9.addEventListener('click', function () {
        map.openInfoWindow(infoWindow9, p9);
    });

    map.addOverlay(marker10);
    var opts10 = {
        width: 200,
        height: 100,
        title: '大学路'
    };
    var infoWindow10 = new BMapGL.InfoWindow('地址：', opts10);
    marker10.addEventListener('click', function () {
        map.openInfoWindow(infoWindow10, p10);
    });

    map.setViewport([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]); //调整到最佳视野


    var driving = new BMap.DrivingRoute(map2, {
        renderOptions: {
            map: map2,
            autoViewport: true,
            panel: 'panel'
        },
    
        onPolylinesSet: function (Route) {
            //当线条添加完成时调用
            for (var i = 0; i < Route.length; i++) {
                var polyline = Route[i].getPolyline(); //获取线条遮挡物
                polyline.setStrokeColor("#3a38ca"); //设置颜色
                polyline.setStrokeWeight(5); //设置宽度
                polyline.setStrokeOpacity(1); //设置透明度
            }
            console.log(Route);
        },
    });
    var div_btn = document.getElementsByClassName("div_btn");
    console.log(div_btn);
    div_btn[0].onclick = function(){
        driving.search(p1, p3, {
            waypoints: []
        }); //waypoints表示途经点
        
        };
    div_btn[1].onclick = function(){
        driving.search(p3, p9, {
            waypoints: [p4,p5]
        }); //waypoints表示途经点
        };
    div_btn[2].onclick = function(){
        driving.search(p9, p7, {
            waypoints: []
        }); //waypoints表示途经点
        };
    div_btn[3].onclick = function(){
        driving.search(p7, p6, {
            waypoints: []
        }); //waypoints表示途经点
        };
    div_btn[4].onclick = function(){
        driving.search(p6, p2, {
            waypoints: []
        }); //waypoints表示途经点
        };
    div_btn[5].onclick = function(){
        driving.search(p2, p10, {
            waypoints: []
        }); //waypoints表示途经点
        };
    div_btn[6].onclick = function(){
        driving.search(p10, p8, {
            waypoints: []
        }); //waypoints表示途经点
        };

    map2.setViewport([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]); //调整到最佳视野
    
    driving.search(p1, p10, {
        waypoints: [p2, p3, p4, p5, p6, p7, p8, p9]
    }); //waypoints表示途经点
    
    
    
    
    // 添加覆盖物并设置视野
    function addOverlays(results) {
        // 自行添加起点和终点
        var start = results.getStart();
        var end = results.getEnd();
        addStart(start.point, start.title);
        addEnd(end.point, end.title);
        var viewPoints = [start.point, end.point];
        // 获取方案
        var plan = results.getPlan(0);
        // 获取方案中包含的路线
        for (var i = 0; i < plan.getNumRoutes(); i++) {
            addRoute(plan.getRoute(i).getPath());
            viewPoints.concat(plan.getRoute(i).getPath());
        }
        // 设置地图视野
        map2.setViewport(viewPoints, {
            margins: [40, 10, 10, 10]
        });
    }
    
    // 添加方案描述
    function addText(results) {
        var plan = results.getPlan(0);
        // 获取方案中包含的路线
        var htmls = [];
        for (var i = 0; i < plan.getNumRoutes(); i++) {
            var route = plan.getRoute(i);
            for (var j = 0; j < route.getNumSteps(); j++) {
                var curStep = route.getStep(j);
                htmls.push((j + 1) + '. ' + curStep.getDescription() + ' ');
            }
        }
        var panel = document.getElementById('panel');
        panel.innerHTML = htmls.join('');
        panel.style.lineHeight = '1.4em';
        panel.style.fontSize = '12px';
    }
    
    // 添加起点覆盖物
    function addStart(point, title) {
        map2.addOverlay(new BMap.Marker(point, {
            title: title,
            icon: new BMap.Icon('blue.png', new BMap.Size(38, 41), {
                anchor: new BMap.Size(4, 36)
            })
        }));
    }
    
    // 添加终点覆盖物
    function addEnd(point, title) {
        map2.addOverlay(new BMap.Marker(point, {
            title: title,
            icon: new BMap.Icon('red.png', new BMap.Size(38, 41), {
                anchor: new BMap.Size(4, 36)
            })
        }));
    }
    
    // 添加路线
    function addRoute(path) {
        map2.addOverlay(new BMap.Polyline(path, {
            strokeColor: '#333',
            enableClicking: false
        }));
    }
    