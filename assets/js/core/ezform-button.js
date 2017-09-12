exports.getButton = () => {
  return `
    <div class="row" id="ezform-btn-saveform">
        <div class="col-lg-12 text-right">
            <div id="div-savedraft"></div>
            <hr>
            &nbsp;&nbsp;
            <button type="button" 
                id="save-submit2" 
                class="btn btn-primary btn-lg" 
                data-toggle="tooltip" 
                data-original-title="ส่งข้อมูลนี้เข้าระบบฐานข้อมูล" 
                style="margin: 10px 0px 10px 0px;">
                <span class="fa fa-send"></span> Submit</button>
            &nbsp;&nbsp;

            <a type="button" 
                class="btn btn-warning btn-lg" 
                href="/inputdata/insert-record?ezf_id=1501817752036780000&amp;target=skip&amp;comp_id_target=&amp;dataid=1504863512013495500" 
                data-toggle="tooltip" 
                data-original-title="ล้างข้อมูลในฟอร์มนี้" 
                data-confirm="<div class = &quot;alert alert-danger h4&quot;>คุณต้องการล้าง(รีเช็ต) Record นี้?</div>">
                <span class="fa fa-times"></span> Clear</a>

            &nbsp;&nbsp;
            <a class="btn btn-danger btn-lg" 
                href="/inputdata/step4?ezf_id=1501817752036780000&amp;target=skip&amp;del_dataid=1504863512013495500" 
                data-toggle="tooltip" 
                data-original-title="ลบ Record นี้ทิ้งไป" 
                data-confirm="<div class = &quot;alert alert-danger h4&quot;>คุณต้องการลบ Record นี้?</div>">
                <span class="fa fa-trash-o"></span> Delete</a>
        </div>
    </div>
    `;
};

