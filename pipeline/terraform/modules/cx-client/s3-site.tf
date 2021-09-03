data "aws_iam_policy_document" "website_s3_policy" {
  statement {
    sid       = "bucket_policy_site_main"
    actions   = ["s3:GetObject"]
    effect    = "Allow"
    resources = ["arn:aws:s3:::${local.bucket_name}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.website_origin_access_identity.iam_arn]
    }
  }
}

resource "aws_s3_bucket" "site" {
  bucket = local.bucket_name
  acl    = "private"
  policy = data.aws_iam_policy_document.website_s3_policy.json

  website {
    index_document = "index.html"
    error_document = "404.html"
  }

  tags = {}

  force_destroy = true
}
