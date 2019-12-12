(function(){
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $('#content').toggleClass('active');
        });
        function showElement(){
            $('$#deudas'.toggleClass('active'));
            $('$#pagos'.toggleClass('active'));
        }
        var modules = document.getElementsByClassName('noti-info');
        console.log(modules);
        if(modules.length > 0){
            for(let module in modules){
                $clamp(module, {clamp: 3});
            }
        }
        $("body").tooltip({ selector: '[data-toggle=tooltip]' });
        
        $('.clampThis').each(function(index, element) {
            $clamp(element, { clamp: 3, useNativeClamp: true });
        });
    });
})();