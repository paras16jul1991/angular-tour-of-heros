package com.splitmoney;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
class ExpenseCalculateController {

	/**
	 * @return
	 */
	@RequestMapping("/resource")
	public Map<String, Object> home() {
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("id", UUID.randomUUID().toString());
		model.put("content", "Hello World");
		return model;
	}

	@RequestMapping("/user")
	public Principal user(Principal user) {
		return user;
	}

	@RequestMapping(value = "/userdetail", method = RequestMethod.POST)
	public void addUserDetail(@RequestBody Expense expense) {
		System.out.print("Inside 2");
	}

	@RequestMapping(value = "/getexpensedetail", method = RequestMethod.GET)
	public ResponseEntity<SplitDetail> getExpenseDetail() {

		org.springframework.http.HttpHeaders responseHeaders = new org.springframework.http.HttpHeaders();
		responseHeaders.setContentType(MediaType.APPLICATION_JSON);
		return new ResponseEntity<SplitDetail>(mockSplitDetail(), responseHeaders, HttpStatus.OK);

	}

	private SplitDetail mockSplitDetail() {
		SplitDetail detail = new SplitDetail();
		List<ExpenseDetail> expenseDetailList = new ArrayList<>();
		ExpenseDetail e = new ExpenseDetail();
		e.amount = 100;
		e.name = "Paras";

		ExpenseDetail e1 = new ExpenseDetail();
		e1.amount = 200;
		e1.name = "dipika";

		expenseDetailList.add(e);
		expenseDetailList.add(e1);
		detail.setDetail(expenseDetailList);

		return detail;
	}
}
