"use strict";angular.module("cfApp",[]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/resources",{templateUrl:"views/resources.html",controller:"ResourcesCtrl"}).when("/ec2",{templateUrl:"views/ec2.html",controller:"ResourcesEC2Ctrl"}).when("/s3",{templateUrl:"views/s3.html",controller:"ResourcesS3Ctrl"}).when("/output",{templateUrl:"views/output.html",controller:"OutputCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("cfApp").controller("MainCtrl",["$scope","$rootScope","$location",function(e,o,t){o.cfObj={},o.cfObj.AWSTemplateFormatVersion="2010-09-09",o.cfObj.Description="",o.cfObj.Resources={},o.ec2=0,o.s3=0,o.s3Resources=[],o.ec2Resources=[],e.goToResources=function(){t.path("/resources")}}]),angular.module("cfApp").controller("ResourcesCtrl",["$scope","$rootScope","$location",function(e,o,t){e.addEC2Resource=function(){t.path("/ec2")},e.addS3Resource=function(){t.path("/s3")},e.goToOutput=function(){t.path("/output")},e.hasMinimumRequirements=function(){return o.s3>0||o.ec2>0}}]),angular.module("cfApp").controller("ResourcesEC2Ctrl",["$scope",function(e){e.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("cfApp").controller("ResourcesS3Ctrl",["$scope","$rootScope","$location",function(e,o,t){e.S3Resouce={Type:"AWS::S3::Bucket"},e.acList=["Private","PublicRead","PublicReadWrite","AuthenticatedRead","BucketOwnerRead","BucketOwnerFullControl"],e.bucketName="",e.accessControl="",e.indexDocument="",e.errorDocument="",e.addS3Resource=function(){var r={},c=parseInt(e.accessControl,10)||0;r.AccessControl=e.acList[c],(e.indexDocument||e.errorDocument)&&(r.WebsiteConfiguration={},r.WebsiteConfiguration.IndexDocument=e.indexDocument,r.WebsiteConfiguration.errorDocument=e.errorDocument),e.S3Resouce.Properties=r,o.s3+=1,o.cfObj.Resources[""+e.bucketName]=e.S3Resouce,t.path("/resources")},e.cancel=function(){t.path("/resources")}}]),angular.module("cfApp").controller("OutputCtrl",["$scope","$rootScope",function(e,o){e.output=angular.toJson(o.cfObj,!0)}]);