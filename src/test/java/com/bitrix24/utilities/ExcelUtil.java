package com.bitrix24.utilities;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ExcelUtil {
    private Sheet workSheet;
    private Workbook workBook;
    private String path;

    public ExcelUtil(String path, String sheetName){
        this.path=path;
        try {
            //Open the file
            FileInputStream ExcelFile=new FileInputStream(path);
            //Access the req test data sheet
            workBook = WorkbookFactory.create(ExcelFile);
            workSheet= workBook.getSheet(sheetName);

        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }

    public ExcelUtil() {

    }

    public String getCellData(int rowNum,int colNum){
        Cell cell;
        try {
            cell=workSheet.getRow(rowNum).getCell(colNum);
            String cellData= cell.toString();
            return cellData;


        }catch(Exception e){
            throw new RuntimeException(e);
        }
    }

    public String[][] getDataArray(){
        String[][] data= new String[rowCount()][columnCount()];
        for(int i=0;i<=rowCount();i++){
            for(int j=0;j<columnCount();j++){
                String value=getCellData(i,j);
                data[i][j]=value;
            }
        }
        return data;
    }

    public List<Map<String,String>> getDataList(){
        //get all columns
        List<String> columns=getColumnNames();
        //this will be returned
        List<Map<String,String>>data= new ArrayList<>();
        for (int i=1;i<=rowCount();i++){
            //get each row
            Row row =workSheet.getRow(i);
            //create map of the row using column and value
            //column map key, cell value-->map value
            Map<String,String >rowMap=new HashMap<String ,String >();
            for (Cell cell:row){
                int columnIndex=cell.getColumnIndex();
                rowMap.put(columns.get(columnIndex),cell.toString());

            }
            data.add(rowMap);
        }
        return data;

    }

    //Assume column names are on first row
    public List<String>getColumnNames(){
        List<String>columns=new ArrayList<>();
        for(Cell cell:workSheet.getRow(0) ){
            columns.add(cell.toString());
        }
        return columns;
    }
    public void setCellData(String value, int rowNum, int colNum){
        Cell cell;
        Row row;
        try {
            row=workSheet.getRow(rowNum);
            cell=row.getCell(colNum);
            if (cell==null) {
                cell=row.createCell(colNum);

            }else{
                cell.setCellValue(value);
            }
            FileOutputStream fileOut=new FileOutputStream(path);
            workBook.write(fileOut);
            fileOut.close();
        }catch (Exception e){
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }


    public void setCellData(String value,String columnName, int row){
        int column=getColumnNames().indexOf(columnName);
        setCellData(value,row,column);


    }
    public int columnCount(){
        return workSheet.getRow(0).getLastCellNum();

    }
    public int rowCount(){
        return workSheet.getLastRowNum();

    }

//================ Get User Name and Password from Excel ==========================

    public String getUserNameFromExcel(int row) throws IOException {

        File src=new File("src\\test\\resources\\externalDataFiles\\BitrixData.xlsx");
        FileInputStream fis=new FileInputStream(src);
        XSSFWorkbook srcBook=new XSSFWorkbook(fis);
        XSSFSheet sourceSheet=srcBook.getSheetAt(1);
        XSSFRow sourceRow=sourceSheet.getRow(row);
        XSSFCell username=sourceRow.getCell(1);
        String userNameExcel=username.getStringCellValue();
        System.out.println("The username is :" + userNameExcel);
        return userNameExcel;

    }

    public String getPasswordFromExcel(int row) throws IOException {

        File src=new File("src\\test\\resources\\externalDataFiles\\BitrixData.xlsx");
        FileInputStream fis=new FileInputStream(src);
        XSSFWorkbook srcBook=new XSSFWorkbook(fis);
        XSSFSheet sourceSheet=srcBook.getSheetAt(1);

        XSSFRow sourceRow=sourceSheet.getRow(row);
        XSSFCell password=sourceRow.getCell(2);
        String passwordExcel=password.getStringCellValue();
        System.out.println("The password is :" + passwordExcel);
        return passwordExcel;
    }
//================================================================================================




}
