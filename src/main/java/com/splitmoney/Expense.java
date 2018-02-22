package com.splitmoney;

public class Expense {

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getEventName() {
		return eventName;
	}
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	public String getExpenseByUser() {
		return expenseByUser;
	}
	public void setExpenseByUser(String expenseByUser) {
		this.expenseByUser = expenseByUser;
	}
	public String getExpenseByUserEmail() {
		return expenseByUserEmail;
	}
	public void setExpenseByUserEmail(String expenseByUserEmail) {
		this.expenseByUserEmail = expenseByUserEmail;
	}
	public String[] getDetail() {
		return detail;
	}
	public void setDetail(String[] detail) {
		this.detail = detail;
	}
	String id;
	String eventName;
	String expenseByUser;
    String expenseByUserEmail;
	String detail[];
}
