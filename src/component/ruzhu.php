 <?php
        //1、链接数据库
        mysql_connect('localhost:8080','root','');
        //2、使用哪个数据库
        mysql_select_db('2017-5-27');
        //3、编写sql语句
        $sql='SELECT * FROM table_user';
        //4、执行sql
        $res=mysql_query($sql);
        //5、抓取数据
        $row=mysql_fetch_row($res);
        echo var_dump($row);
?>