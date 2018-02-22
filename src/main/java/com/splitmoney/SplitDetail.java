package com.splitmoney;

import java.util.ArrayList;
import java.util.List;

public class SplitDetail {

	List<ExpenseDetail> detail = new ArrayList<ExpenseDetail>();

	public List<ExpenseDetail> getDetail() {
		return detail;
	}

	public void setDetail(List<ExpenseDetail> detail) {
		this.detail = detail;
	}

}
